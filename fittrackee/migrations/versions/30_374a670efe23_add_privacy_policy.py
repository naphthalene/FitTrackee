"""add privacy policy

Revision ID: 374a670efe23
Revises: 0f375c44e659
Create Date: 2023-02-25 11:08:08.977217

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '374a670efe23'
down_revision = '0f375c44e659'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('app_config', schema=None) as batch_op:
        batch_op.add_column(sa.Column('privacy_policy_date', sa.DateTime(), nullable=True))
        batch_op.add_column(sa.Column('privacy_policy', sa.Text(), nullable=True))
        batch_op.add_column(sa.Column('about', sa.Text(), nullable=True))

    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.add_column(sa.Column('accepted_policy_date', sa.DateTime(), nullable=True))
        batch_op.alter_column('date_format',
               existing_type=sa.VARCHAR(length=50),
               nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.alter_column('date_format',
               existing_type=sa.VARCHAR(length=50),
               nullable=False)
        batch_op.drop_column('accepted_policy_date')

    with op.batch_alter_table('app_config', schema=None) as batch_op:
        batch_op.drop_column('about')
        batch_op.drop_column('privacy_policy')
        batch_op.drop_column('privacy_policy_date')

    # ### end Alembic commands ###
