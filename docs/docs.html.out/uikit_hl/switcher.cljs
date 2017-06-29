(ns uikit-hl.switcher
  (:require [hoplon.core :as hl]
            [uikit-hl.core :as core]))

(def ^:dynamic *uk-switcher* "")
(def ^:dynamic *bottom* nil)

(def ^:dynamic *title* nil)
(def ^:dynamic *href* nil)

(defmethod hl/do! :uk-switcher
  [elem _ v]
  (.switcher js/UIkit elem (clj->js v)))

(hl/defelem switcher [attr kids]
  (let []
    (hl/ul (core/assoc-class attr {:uk-switcher true}) kids)))

(hl/defelem item [attr kids]
  (let [title    (:title    attr *title*)
        href     (:href     attr *href*)
        attr     (dissoc    attr :title :href)]
    (hl/li attr [(hl/a :href href title) kids])))
