(ns uikit-hl.toggle
  (:require [hoplon.core :as hl]
            [uikit-hl.core :as core]))

(def ^:dynamic *uk-toggle* "")

(defmethod hl/do! :uk-toggle
  [elem _ v]
  (.toggle js/UIkit elem (clj->js v)))
