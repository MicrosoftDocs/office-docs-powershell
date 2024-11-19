---
title: "Open the Exchange Management Shell"
ms.author: chrisda
author: chrisda
manager: deniseb
ms.date: 9/7/2023
ms.audience: ITPro
audience: ITPro
ms.topic: article
ms.service: exchange-powershell
ms.localizationpriority: medium
ms.assetid: 63976059-25f8-4b4f-b597-633e78b803c0
description: "Find and open the shortcut for Exchange PowerShell (also known as the Exchange Management Shell) on Exchange servers or computers that have the Exchange management tools installed."
---

# Open the Exchange Management Shell

The Exchange Management Shell enables you to do administrative tasks on Exchange servers from the command line. You can open the Exchange Management Shell from the following locations:

- On the Exchange server directly or in a Remote Desktop Connection session.
- On a local computer after you install the Exchange management tools. For more information, see [Install the Exchange management tools](/Exchange/plan-and-deploy/post-installation-tasks/install-management-tools).

## What do you need to know before you begin?

- Estimated time to complete this procedure: less than 1 minute.

- To do the procedures in this article, you need to be assigned at least one management role (typically, via membership in a role group). After you connect, the cmdlets and parameters that you have or don't have access to is controlled by role-based access control (RBAC). For more information, see [Exchange Server permissions](/exchange/permissions/permissions).

- Running the Exchange Management Shell from a local installation of the Exchange management tools requires remote PowerShell access for your user account. By default, users are allowed to use remote PowerShell to connect to an Exchange server, but you can block remote PowerShell access for user accounts. For instructions, see [Control remote PowerShell access to Exchange servers](control-remote-powershell-access-to-exchange-servers.md).

> [!TIP]
> Having problems? Ask for help in the [Exchange Server](https://go.microsoft.com/fwlink/p/?linkId=60612) forums.

## Open the Exchange Management Shell in Windows Server 2019 Core

- **Mailbox servers**: Run the following command from a Command Prompt:

  ```dos
  LaunchEMS
  ```

- **Edge Transport servers**: Run the following commands from a Command Prompt. These two separate commands are presented on one line for ease of copying and running:

  ```dos
  exshell.psc1 & exchange.ps1
  ```

## Open the Exchange Management Shell in Windows Server 2016 or Windows 10

Select **Start** \> **Microsoft Exchange Server 2016 \>** **Exchange Management Shell**.

## Open the Exchange Management Shell in Windows Server 2012 R2 or Windows 8.1

When you install Exchange on Windows Server 2012 R2 or the Exchange management tools on Windows 8.1, the Exchange Management Shell shortcut isn't automatically pinned to the Start screen.

To pin the shortcut to the Start screen, do the following steps:

1. On the Start screen, open the Apps view by selecting the down arrow near the lower-left corner or swiping up from the middle of the screen.

2. The **Exchange Management Shell** shortcut is in a group named **Microsoft Exchange Server 2016**. When you find the shortcut, right-click it or press and hold it, and select **Pin to Start**. To pin it to the desktop taskbar, select **Pin to taskbar**.

To use the Search charm to find and run the Exchange Management Shell, use one of the methods described in the next section.

## Open the Exchange Management Shell in Windows Server 2012

When you install Exchange on Windows Server 2012, the Exchange Management Shell shortcut should automatically be pinned to the Start screen.

If it's not, or if you just want to quickly find and run the Exchange Management Shell, use one of the following methods:

- On the Start screen, click in an empty area, and type Exchange Management Shell. When the shortcut appears in the search results, you can select it.

- On the desktop or the Start screen, press Windows key + Q. In the Search charm, type Exchange Management Shell. When the shortcut appears in the results, you can select it.

- On the desktop or the Start screen, move your cursor to the upper-right corner, or swipe left from the right edge of the screen to show the charms. Select the Search charm, and type Exchange Management Shell. When the shortcut appears in the results, you can select it.

If you're using Remote Desktop Connection, you might need to use one of the following methods so the Search charm appears on the remote Exchange server and not on your local computer:

- Open Remote Desktop Connection and select **Show Options** \> **Local Resources** tab \> **Apply Windows key combinations**. The default value is **Only when using the full screen**, but you can change it to **On the remote computer**.

- While you're connected to the remote Exchange server, use the connection bar that appears at the top of the screen to open the Exchange server's Search charm or Start screen by clicking the down arrow and selecting **Charms** or **Start**.
