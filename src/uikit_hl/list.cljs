(ns uikit-hl.list
  (:refer-clojure :exclude [list])
  (:require [hoplon.core :as h]
            [hoplon.jquery]))

(defn- format-list [list]
  (str "uk-list-" list))

(defmethod h/do! ::default
  [elem kw v]
  (h/do! elem :class {(format-list (name kw)) v})

  (h/defelem list [{:keys [bullet divider striped large] :as attr} kids]
    (h/hr
      (dissoc attr :bullet :divider :striped :large)
      ::bullet  bullet
      ::divider divider
      ::striped striped
      ::large   large
      kids)))
