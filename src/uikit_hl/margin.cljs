(ns uikit-hl.margin
  (:require [hoplon.core :as hl]
            [hoplon.jquery]
            [uikit-hl.core :as core]))

(defmethod hl/do! :uk-margin
  [elem _ v]
  (.margin js/UIkit elem (clj->js v)))

(defmethod hoplon.core/do! :uk-margin-top
  [elem kw v]
  (hoplon.core/do! elem :class/uikit {:uk-margin-top v}))

(defmethod hoplon.core/do! :uk-margin-bottom
  [elem kw v]
  (hoplon.core/do! elem :class/uikit {:uk-margin-bottom v}))

(defmethod hoplon.core/do! :uk-margin-left
  [elem kw v]
  (hoplon.core/do! elem :class/uikit {:uk-margin-left v}))

(defmethod hoplon.core/do! :uk-margin-right
  [elem kw v]
  (hoplon.core/do! elem :class/uikit {:uk-margin-right v}))

(defmethod hoplon.core/do! :uk-margin-small
  [elem kw v]
  (hoplon.core/do! elem :class/uikit {:uk-margin-small v}))

(defmethod hoplon.core/do! :uk-margin-small-top
  [elem kw v]
  (hoplon.core/do! elem :class/uikit {:uk-margin-small-top v}))

(defmethod hoplon.core/do! :uk-margin-small-bottom
  [elem kw v]
  (hoplon.core/do! elem :class/uikit {:uk-margin-small-bottom v}))

(defmethod hoplon.core/do! :uk-margin-small-left
  [elem kw v]
  (hoplon.core/do! elem :class/uikit {:uk-margin-small-left v}))

(defmethod hoplon.core/do! :uk-margin-small-right
  [elem kw v]
  (hoplon.core/do! elem :class/uikit {:uk-margin-small-right v}))

(defmethod hoplon.core/do! :uk-margin-medium
  [elem kw v]
  (hoplon.core/do! elem :class/uikit {:uk-margin-medium v}))

(defmethod hoplon.core/do! :uk-margin-medium-top
  [elem kw v]
  (hoplon.core/do! elem :class/uikit {:uk-margin-medium-top v}))

(defmethod hoplon.core/do! :uk-margin-medium-bottom
  [elem kw v]
  (hoplon.core/do! elem :class/uikit {:uk-margin-medium-bottom v}))

(defmethod hoplon.core/do! :uk-margin-medium-left
  [elem kw v]
  (hoplon.core/do! elem :class/uikit {:uk-margin-medium-left v}))

(defmethod hoplon.core/do! :uk-margin-medium-right
  [elem kw v]
  (hoplon.core/do! elem :class/uikit {:uk-margin-medium-right v}))

(defmethod hoplon.core/do! :uk-margin-large
  [elem kw v]
  (hoplon.core/do! elem :class/uikit {:uk-margin-large v}))

(defmethod hoplon.core/do! :uk-margin-large-top
  [elem kw v]
  (hoplon.core/do! elem :class/uikit {:uk-margin-large-top v}))

(defmethod hoplon.core/do! :uk-margin-large-bottom
  [elem kw v]
  (hoplon.core/do! elem :class/uikit {:uk-margin-large-bottom v}))

(defmethod hoplon.core/do! :uk-margin-large-left
  [elem kw v]
  (hoplon.core/do! elem :class/uikit {:uk-margin-large-left v}))

(defmethod hoplon.core/do! :uk-margin-large-right
  [elem kw v]
  (hoplon.core/do! elem :class/uikit {:uk-margin-large-right v}))

(defmethod hoplon.core/do! :uk-margin-xlarge
  [elem kw v]
  (hoplon.core/do! elem :class/uikit {:uk-margin-xlarge v}))

(defmethod hoplon.core/do! :uk-margin-xlarge-top
  [elem kw v]
  (hoplon.core/do! elem :class/uikit {:uk-margin-xlarge-top v}))

(defmethod hoplon.core/do! :uk-margin-xlarge-bottom
  [elem kw v]
  (hoplon.core/do! elem :class/uikit {:uk-margin-xlarge-bottom v}))

(defmethod hoplon.core/do! :uk-margin-xlarge-left
  [elem kw v]
  (hoplon.core/do! elem :class/uikit {:uk-margin-xlarge-left v}))

(defmethod hoplon.core/do! :uk-margin-xlarge-right
  [elem kw v]
  (hoplon.core/do! elem :class/uikit {:uk-margin-xlarge-right v}))

(defmethod hoplon.core/do! :uk-margin-remove
  [elem kw v]
  (hoplon.core/do! elem :class/uikit {:uk-margin-remove v}))

(defmethod hoplon.core/do! :uk-margin-remove-top
  [elem kw v]
  (hoplon.core/do! elem :class/uikit {:uk-margin-remove-top v}))

(defmethod hoplon.core/do! :uk-margin-remove-bottom
  [elem kw v]
  (hoplon.core/do! elem :class/uikit {:uk-margin-remove-bottom v}))

(defmethod hoplon.core/do! :uk-margin-remove-left
  [elem kw v]
  (hoplon.core/do! elem :class/uikit {:uk-margin-remove-left v}))

(defmethod hoplon.core/do! :uk-margin-remove-right
  [elem kw v]
  (hoplon.core/do! elem :class/uikit {:uk-margin-remove-right v}))

(defmethod hoplon.core/do! :uk-margin-remove-vertical
  [elem kw v]
  (hoplon.core/do! elem :class/uikit {:uk-margin-remove-vertical v}))

(defmethod hoplon.core/do! :uk-margin-remove-adjacent
  [elem kw v]
  (hoplon.core/do! elem :class/uikit {:uk-margin-remove-adjacent v}))

(defmethod hoplon.core/do! :uk-margin-auto
  [elem kw v]
  (hoplon.core/do! elem :class/uikit {:uk-margin-auto v}))

(defmethod hoplon.core/do! :uk-margin-auto-top
  [elem kw v]
  (hoplon.core/do! elem :class/uikit {:uk-margin-auto-top v}))

(defmethod hoplon.core/do! :uk-margin-auto-bottom
  [elem kw v]
  (hoplon.core/do! elem :class/uikit {:uk-margin-auto-bottom v}))

(defmethod hoplon.core/do! :uk-margin-auto-left
  [elem kw v]
  (hoplon.core/do! elem :class/uikit {:uk-margin-auto-left v}))

(defmethod hoplon.core/do! :uk-margin-auto-right
  [elem kw v]
  (hoplon.core/do! elem :class/uikit {:uk-margin-auto-right v}))

(defmethod hoplon.core/do! :uk-margin-auto-vertical
  [elem kw v]
  (hoplon.core/do! elem :class/uikit {:uk-margin-auto-vertical v}))
