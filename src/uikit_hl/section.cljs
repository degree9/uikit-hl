(ns uikit-hl.section
  (:require [hoplon.core :as h]
            [hoplon.jquery]
            [uikit-hl.core :as uk]))

(defmulti uk-section! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-section! elem key val))

(defn- format-section [section]
  (str "uk-section-" section))

(defmethod uk-section! ::default
  [elem kw v]
  (h/do! elem :class {(format-section (name kw)) v}))

(defmethod h/do! ::section
  [elem _ v]
  (h/do! elem :class {:uk-section v}))

(h/defelem section [{:keys [default muted primary secondary xsmall small large xlarge] :as attr} kids]
  (h/div
    (dissoc attr :default :muted :primary :secondary :xsmall :small :large :xlarge)
    ::section true
    ::default default
    ::muted muted
    ::primary primary
    ::secondary secondary
    ::xsmall xsmall
    ::small small
    ::large large
    ::xlarge xlarge
    kids))
