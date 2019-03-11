(ns uikit-hl.notification
  (:require [hoplon.core :as hl]
            [uikit-hl.core :as core]
            ["uikit" :as uikit]))

(defn notification [opts]
  (.notification uikit (clj->js opts)))

(defn notify! [message & status]
  (notification {:message message :status status}))
