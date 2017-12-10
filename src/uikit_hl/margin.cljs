(ns uikit-hl.margin
  (:require [hoplon.core :as hl]
            [uikit-hl.core :as core]))

(def ^:dynamic *uk-margin* "")

(def ^:dynamic *margin-top*    nil)
(def ^:dynamic *margin-bottom* nil)
(def ^:dynamic *margin-left*   nil)
(def ^:dynamic *margin-right*  nil)

(def ^:dynamic *margin-small-top*    nil)
(def ^:dynamic *margin-small-bottom* nil)
(def ^:dynamic *margin-small-left*   nil)
(def ^:dynamic *margin-small-right*  nil)

(def ^:dynamic *margin-medium-top*    nil)
(def ^:dynamic *margin-medium-bottom* nil)
(def ^:dynamic *margin-medium-left*   nil)
(def ^:dynamic *margin-medium-right*  nil)

(def ^:dynamic *margin-large-top*    nil)
(def ^:dynamic *margin-large-bottom* nil)
(def ^:dynamic *margin-large-left*   nil)
(def ^:dynamic *margin-large-right*  nil)

(def ^:dynamic *margin-xlarge-top*    nil)
(def ^:dynamic *margin-xlarge-bottom* nil)
(def ^:dynamic *margin-xlarge-left*   nil)
(def ^:dynamic *margin-xlarge-right*  nil)

(def ^:dynamic *margin-remove*           nil)
(def ^:dynamic *margin-remove-top*       nil)
(def ^:dynamic *margin-remove-bottom*    nil)
(def ^:dynamic *margin-remove-left*      nil)
(def ^:dynamic *margin-remove-right*     nil)
(def ^:dynamic *margin-remove-vertical*  nil)
(def ^:dynamic *margin-remove-adjacent*  nil)

(def ^:dynamic *margin-auto*           nil)
(def ^:dynamic *margin-auto-top*       nil)
(def ^:dynamic *margin-auto-bottom*    nil)
(def ^:dynamic *margin-auto-left*      nil)
(def ^:dynamic *margin-auto-right*     nil)
(def ^:dynamic *margin-auto-vertical*  nil)

(defmethod hl/do! :uk-margin
  [elem _ v]
  (.margin js/UIkit elem (clj->js v)))

(defmethod hl/do! :uk-margin-class
  [elem _ v]
  (->> v
    (merge {:uk-margin-top    *margin-top*
            :uk-margin-bottom *margin-bottom*
            :uk-margin-left   *margin-left*
            :uk-margin-right  *margin-right*

            :uk-margin-small-top    *margin-small-top*
            :uk-margin-small-bottom *margin-small-bottom*
            :uk-margin-small-left   *margin-small-left*
            :uk-margin-small-right  *margin-small-right*

            :uk-margin-medium-top    *margin-medium-top*
            :uk-margin-medium-bottom *margin-medium-bottom*
            :uk-margin-medium-left   *margin-medium-left*
            :uk-margin-medium-right  *margin-medium-right*

            :uk-margin-large-top    *margin-large-top*
            :uk-margin-large-bottom *margin-large-bottom*
            :uk-margin-large-left   *margin-large-left*
            :uk-margin-large-right  *margin-large-right*

            :uk-margin-xlarge-top    *margin-xlarge-top*
            :uk-margin-xlarge-bottom *margin-xlarge-bottom*
            :uk-margin-xlarge-left   *margin-xlarge-left*
            :uk-margin-xlarge-right  *margin-xlarge-right*

            :uk-margin-remove           *margin-remove*
            :uk-margin-remove-top       *margin-remove-top*
            :uk-margin-remove-bottom    *margin-remove-bottom*
            :uk-margin-remove-left      *margin-remove-left*
            :uk-margin-remove-right     *margin-remove-right*
            :uk-margin-remove-vertical  *margin-remove-vertical*
            :uk-margin-remove-adjacent  *margin-remove-adjacent*

            :uk-margin-auto           *margin-auto*
            :uk-margin-auto-top       *margin-auto-top*
            :uk-margin-auto-bottom    *margin-auto-bottom*
            :uk-margin-auto-left      *margin-auto-left*
            :uk-margin-auto-right     *margin-auto-right*
            :uk-margin-auto-vertical  *margin-auto-vertical*

            })
    (hl/do! elem :class )))

(defmethod hoplon.core/do! :margin-top
  [elem kw v]
  (hoplon.core/do! elem :uk-margin-class {:uk-margin-top v}))

(defmethod hoplon.core/do! :margin-bottom
  [elem kw v]
  (hoplon.core/do! elem :uk-margin-class {:uk-margin-bottom v}))

(defmethod hoplon.core/do! :margin-left
  [elem kw v]
  (hoplon.core/do! elem :uk-margin-class {:uk-margin-left v}))

(defmethod hoplon.core/do! :margin-right
  [elem kw v]
  (hoplon.core/do! elem :uk-margin-class {:uk-margin-right v}))

(defmethod hoplon.core/do! :margin-small-top
  [elem kw v]
  (hoplon.core/do! elem :uk-margin-class {:uk-margin-small-top v}))

(defmethod hoplon.core/do! :margin-small-bottom
  [elem kw v]
  (hoplon.core/do! elem :uk-margin-class {:uk-margin-small-bottom v}))

(defmethod hoplon.core/do! :margin-small-left
  [elem kw v]
  (hoplon.core/do! elem :uk-margin-class {:uk-margin-small-left v}))

(defmethod hoplon.core/do! :margin-small-right
  [elem kw v]
  (hoplon.core/do! elem :uk-margin-class {:uk-margin-small-right v}))

(defmethod hoplon.core/do! :margin-medium-top
  [elem kw v]
  (hoplon.core/do! elem :uk-margin-class {:uk-margin-medium-top v}))

(defmethod hoplon.core/do! :margin-medium-bottom
  [elem kw v]
  (hoplon.core/do! elem :uk-margin-class {:uk-margin-medium-bottom v}))

(defmethod hoplon.core/do! :margin-medium-left
  [elem kw v]
  (hoplon.core/do! elem :uk-margin-class {:uk-margin-medium-left v}))

(defmethod hoplon.core/do! :margin-medium-right
  [elem kw v]
  (hoplon.core/do! elem :uk-margin-class {:uk-margin-medium-right v}))

(defmethod hoplon.core/do! :margin-large-top
  [elem kw v]
  (hoplon.core/do! elem :uk-margin-class {:uk-margin-large-top v}))

(defmethod hoplon.core/do! :margin-large-bottom
  [elem kw v]
  (hoplon.core/do! elem :uk-margin-class {:uk-margin-large-bottom v}))

(defmethod hoplon.core/do! :margin-large-left
  [elem kw v]
  (hoplon.core/do! elem :uk-margin-class {:uk-margin-large-left v}))

(defmethod hoplon.core/do! :margin-large-right
  [elem kw v]
  (hoplon.core/do! elem :uk-margin-class {:uk-margin-large-right v}))

(defmethod hoplon.core/do! :margin-xlarge-top
  [elem kw v]
  (hoplon.core/do! elem :uk-margin-class {:uk-margin-xlarge-top v}))

(defmethod hoplon.core/do! :margin-xlarge-bottom
  [elem kw v]
  (hoplon.core/do! elem :uk-margin-class {:uk-margin-xlarge-bottom v}))

(defmethod hoplon.core/do! :margin-xlarge-left
  [elem kw v]
  (hoplon.core/do! elem :uk-margin-class {:uk-margin-xlarge-left v}))

(defmethod hoplon.core/do! :margin-xlarge-right
  [elem kw v]
  (hoplon.core/do! elem :uk-margin-class {:uk-margin-xlarge-right v}))

(defmethod hoplon.core/do! :margin-remove
  [elem kw v]
  (hoplon.core/do! elem :uk-margin-class {:uk-margin-remove v}))

(defmethod hoplon.core/do! :margin-remove-top
  [elem kw v]
  (hoplon.core/do! elem :uk-margin-class {:uk-margin-remove-top v}))

(defmethod hoplon.core/do! :margin-remove-bottom
  [elem kw v]
  (hoplon.core/do! elem :uk-margin-class {:uk-margin-remove-bottom v}))

(defmethod hoplon.core/do! :margin-remove-left
  [elem kw v]
  (hoplon.core/do! elem :uk-margin-class {:uk-margin-remove-left v}))

(defmethod hoplon.core/do! :margin-remove-right
  [elem kw v]
  (hoplon.core/do! elem :uk-margin-class {:uk-margin-remove-right v}))

(defmethod hoplon.core/do! :margin-remove-vertical
  [elem kw v]
  (hoplon.core/do! elem :uk-margin-class {:uk-margin-remove-vertical v}))

(defmethod hoplon.core/do! :margin-remove-adjacent
  [elem kw v]
  (hoplon.core/do! elem :uk-margin-class {:uk-margin-remove-adjacent v}))

(defmethod hoplon.core/do! :margin-auto
  [elem kw v]
  (hoplon.core/do! elem :uk-margin-class {:uk-margin-auto v}))

(defmethod hoplon.core/do! :margin-auto-top
  [elem kw v]
  (hoplon.core/do! elem :uk-margin-class {:uk-margin-auto-top v}))

(defmethod hoplon.core/do! :margin-auto-bottom
  [elem kw v]
  (hoplon.core/do! elem :uk-margin-class {:uk-margin-auto-bottom v}))

(defmethod hoplon.core/do! :margin-auto-left
  [elem kw v]
  (hoplon.core/do! elem :uk-margin-class {:uk-margin-auto-left v}))

(defmethod hoplon.core/do! :margin-auto-right
  [elem kw v]
  (hoplon.core/do! elem :uk-margin-class {:uk-margin-auto-right v}))

(defmethod hoplon.core/do! :margin-auto-vertical
  [elem kw v]
  (hoplon.core/do! elem :uk-margin-class {:uk-margin-auto-vertical v}))
