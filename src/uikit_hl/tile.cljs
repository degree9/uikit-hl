(ns uikit-hl.tile
  (:require [hoplon.core :as h]
            [hoplon.jquery]
            [uikit-hl.core :as uk]))

(defmulti uk-tile! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-tile! elem key val))

(defn- format-tile [tile]
  (str "uk-tile-" tile))

(defmethod uk-tile! ::default
  [elem kw v]
  (h/do! elem :class {(format-tile (name kw)) v}))

(h/defelem tile [{:keys [default muted primary secondary] :as attr} kids]
  (h/ul
    (dissoc attr :default :muted :primary :secondary)
    ::tile true
    ::default default
    ::muted muted
    ::primary primary
    ::secondary secondary
    kids))
