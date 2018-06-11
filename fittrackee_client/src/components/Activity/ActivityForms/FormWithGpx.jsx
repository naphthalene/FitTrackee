import React from 'react'
import { connect } from 'react-redux'

import { setLoading } from '../../../actions/index'
import { addActivity, editActivity } from '../../../actions/activities'
import { history } from '../../../index'


function FormWithGpx (props) {
  const {
    activity, loading, onAddActivity, onEditActivity, sports
  } = props
  const sportId = activity ? activity.sport_id : ''
  return (
    <form
      encType="multipart/form-data"
      method="post"
      onSubmit={event => event.preventDefault()}
    >
      <div className="form-group">
        <label>
          Sport:
          <select
            className="form-control input-lg"
            defaultValue={sportId}
            disabled={loading}
            name="sport"
            required
          >
            <option value="" />
            {sports.map(sport => (
              <option key={sport.id} value={sport.id}>
                {sport.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      {activity ? (
        <div className="form-group">
          <label>
            Title:
            <input
              name="title"
              defaultValue={activity ? activity.title : ''}
              disabled={loading}
              className="form-control input-lg"
            />
          </label>
        </div>
      ) : (
        <div className="form-group">
          <label>
            <strong>gpx</strong> file or <strong>zip</strong>{' '}
            file containing <strong>gpx</strong> (no folder inside):
            <input
              accept=".gpx, .zip"
              className="form-control input-lg"
              disabled={loading}
              name="gpxFile"
              required
              type="file"
            />
          </label>
        </div>
      )}
      {loading ? (
        <div className="loader" />
      ) : (
        <div>
          <input
            type="submit"
            className="btn btn-primary btn-lg btn-block"
            onClick={
              event => activity
                ? onEditActivity(event, activity)
                : onAddActivity(event)
            }
            value="Submit"
          />
          <input
            type="submit"
            className="btn btn-secondary btn-lg btn-block"
            onClick={() => history.go(-1)}
            value="Cancel"
          />
        </div>
      )}
    </form>
  )
}

export default connect(
  state => ({
    loading: state.loading
  }),
  dispatch => ({
    onAddActivity: e => {
      dispatch(setLoading(true))
      const form = new FormData()
      form.append('file', e.target.form.gpxFile.files[0])
      form.append(
        'data', `{"sport_id": ${e.target.form.sport.value}}`
      )
      dispatch(addActivity(form))
    },
    onEditActivity: (e, activity) => {
      dispatch(editActivity({
        id: activity.id,
        sport_id: +e.target.form.sport.value,
        title: e.target.form.title.value,
      }))
    },
  })
)(FormWithGpx)