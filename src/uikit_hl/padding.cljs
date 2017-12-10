(ns uikit-hl.padding
  (:require [hoplon.core :as hl]
            [uikit-hl.core :as core]))

(def ^:dynamic *padding* nil)

(def ^:dynamic *padding-small*  nil)
(def ^:dynamic *padding-large*  nil)
(def ^:dynamic *padding-xlarge* nil)

(def ^:dynamic *padding-remove*           nil)
(def ^:dynamic *padding-remove-top*       nil)
(def ^:dynamic *padding-remove-bottom*    nil)
(def ^:dynamic *padding-remove-left*      nil)
(def ^:dynamic *padding-remove-right*     nil)
(def ^:dynamic *padding-remove-vertical*  nil)
(def ^:dynamic *padding-remove-horizontal*  nil)

(defmethod hl/do! :uk-padding
  [elem _ v]
  (->> v
    (merge {:uk-padding        *padding*
            :uk-padding-small  *padding-small*
            :uk-padding-large  *padding-large*
            :uk-padding-xlarge *padding-xlarge*

            :uk-padding-remove            *padding-remove*
            :uk-padding-remove-top        *padding-remove-top*
            :uk-padding-remove-bottom     *padding-remove-bottom*
            :uk-padding-remove-left       *padding-remove-left*
            :uk-padding-remove-right      *padding-remove-right*
            :uk-padding-remove-vertical   *padding-remove-vertical*
            :uk-padding-remove-horizontal *padding-remove-horizontal*
            })
    (hl/do! elem :class )))

(defmethod hoplon.core/do! :padding
  [elem kw v]
  (hoplon.core/do! elem :uk-padding {:uk-padding v}))

(defmethod hoplon.core/do! :padding-small
  [elem kw v]
  (hoplon.core/do! elem :uk-padding {:uk-padding-small v}))

(defmethod hoplon.core/do! :padding-large
  [elem kw v]
  (hoplon.core/do! elem :uk-padding {:uk-padding-large v}))

(defmethod hoplon.core/do! :padding-xlarge
  [elem kw v]
  (hoplon.core/do! elem :uk-padding {:uk-padding-xlarge v}))

(defmethod hoplon.core/do! :padding-remove
  [elem kw v]
  (hoplon.core/do! elem :uk-padding {:uk-padding-remove v}))

(defmethod hoplon.core/do! :padding-remove-top
  [elem kw v]
  (hoplon.core/do! elem :uk-padding {:uk-padding-remove-top v}))

(defmethod hoplon.core/do! :padding-remove-bottom
  [elem kw v]
  (hoplon.core/do! elem :uk-padding {:uk-padding-remove-bottom v}))

(defmethod hoplon.core/do! :padding-remove-left
  [elem kw v]
  (hoplon.core/do! elem :uk-padding {:uk-padding-remove-left v}))

(defmethod hoplon.core/do! :padding-remove-right
  [elem kw v]
  (hoplon.core/do! elem :uk-padding {:uk-padding-remove-right v}))

(defmethod hoplon.core/do! :padding-remove-vertical
  [elem kw v]
  (hoplon.core/do! elem :uk-padding {:uk-padding-remove-vertical v}))

(defmethod hoplon.core/do! :padding-remove-horizontal
  [elem kw v]
  (hoplon.core/do! elem :uk-padding {:uk-padding-remove-horizontal v}))
