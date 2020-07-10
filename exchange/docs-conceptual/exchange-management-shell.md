---
title: "Exchange Server PowerShell (Exchange Management Shell)"
ms.author: chrisda
author: chrisda
manager: sansimp
ms.date:
ms.audience: ITPro
ms.topic: article
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 925ad66f-2f05-4269-9923-c353d9c19312
description: "Learn about Exchange Server PowerShell, also known as the Exchange Management Shell. This topic describes how PowerShell works on Exchange servers, and provides links to other topics that can help you learn how to use the Exchange Management Shell."
---

# Exchange Server PowerShell (Exchange Management Shell)

The Exchange Management Shell is built on Windows PowerShell technology and provides a powerful command-line interface that enables the automation of Exchange administration tasks. You can use the Exchange Management Shell to manage every aspect of Exchange. For example, you can create email accounts, create Send connectors and Receive connectors, configure mailbox database properties, and manage distribution groups. You can use the Exchange Management Shell to perform every task that's available in the Exchange graphical management tools, plus things that you can't do there (for example, bulk operations). In fact, when you do something in the Exchange admin center (EAC), the Exchange Control Panel (ECP), or the Exchange Management Console (EMC), it's the Exchange Management Shell that does the work behind the scenes.

The Exchange Management Shell also provides a robust and flexible scripting platform. Visual Basic scripts that required many lines of code can be replaced by Exchange Management Shell commands that use as little as one line of code. The Exchange Management Shell provides this flexibility because it uses an object model that's based on the Microsoft .NET Framework. This object model enables Exchange cmdlets to apply the output from one command to subsequent commands.

To start using the Exchange Management Shell immediately, see the [Exchange Management Shell documentation](#exchange-management-shell-documentation) section later in this topic.

## How the Exchange Management Shell works on all Exchange server roles except Edge Transport

Whether you use the Exchange Management Shell on a local Exchange server or on an Exchange server that's located across the country, remote PowerShell does the work.

When you click the Exchange Management Shell shortcut on an Exchange server, the local instance of Windows PowerShell performs the following steps:

1. Connect to the closest Exchange server (most often, the local Exchange server) using a required Windows PowerShell component called Windows Remote Management (WinRM).

2. Perform authentication checks.

3. Create a remote PowerShell session for you to use.

You only get access to the Exchange cmdlets and parameters that are associated with the Exchange management role groups and management roles you're assigned. For more information about how Exchange uses role groups and roles to manage who can do what tasks, see [Exchange Server permissions](https://docs.microsoft.com/Exchange/permissions/permissions).

A benefit of remote PowerShell is that you can use Windows PowerShell on a local computer to connect to a remote Exchange server, and import the Exchange cmdlets in the Windows PowerShell session so you can administer Exchange. The only requirements for the computer are:

- A supported operating system for Exchange Server.

- A supported version of the .NET Framework.

- A supported version of the Windows Management Framework (WMF), which includes WinRM and Windows PowerShell.

For details, see the following topics:

- [Exchange 2019 system requirements](https://docs.microsoft.com/Exchange/plan-and-deploy/system-requirements?view=exchserver-2019)

- [Exchange 2016 system requirements](https://docs.microsoft.com/Exchange/plan-and-deploy/system-requirements?view=exchserver-2016)

- [Exchange 2013 system requirements](https://docs.microsoft.com/exchange/exchange-2013-system-requirements-exchange-2013-help)

- [Exchange 2010 system requirements](https://docs.microsoft.com/previous-versions/office/exchange-server-2010/aa996719(v=exchg.141))

However, we recommend that you install the Exchange management tools (which includes the Exchange Management Shell) on any computer that you use to extensively manage Exchange Server. Without the Exchange management tools installed, you need to connect to the remote Exchange server manually, and you don't have access to the additional capabilities that the Exchange management tools provide.

For more information about connecting to Exchange servers without the Exchange management tools installed, see [Connect to Exchange servers using remote PowerShell](connect-to-exchange-servers-using-remote-powershell.md).

## How Exchange Management Shell works on Edge Transport servers

On Edge Transport servers, the Exchange Management Shell works differently. You typically deploy Edge Transport servers in your perimeter network, either as stand-alone servers or as members of a perimeter Active Directory domain.

When you click the Exchange Management Shell shortcut on an Exchange Edge Transport server, the local instance of Windows PowerShell creates a local PowerShell session for you to use.

Edge Transport servers don't use management roles or management role groups to control permissions. The local Administrators group controls who can configure the Exchange features on the local server.

For more information about Edge Transport servers, see [Edge Transport Servers](https://docs.microsoft.com/Exchange/architecture/edge-transport-servers/edge-transport-servers).

## Exchange Management Shell documentation

The following table provides links to topics that can help you learn about and use the Exchange Management Shell.

|**Topic**|**Description**|
|:-----|:-----|
|[Open the Exchange Management Shell](open-the-exchange-management-shell.md)|Find and open the Exchange Management Shell on an Exchange server or a computer that has the Exchange management tools installed.|
|[Connect to Exchange servers using remote PowerShell](connect-to-exchange-servers-using-remote-powershell.md)|Use Windows PowerShell on a local computer to connect to an Exchange server.|
|[Control remote PowerShell access to Exchange servers](control-remote-powershell-access-to-exchange-servers.md)|Learn how to block or allow users' remote PowerShell access to Exchange servers.|
|[Find the permissions required to run any Exchange cmdlet](find-exchange-cmdlet-permissions.md)|Find the permissions you need to run a specific cmdlet, or one or more parameters on the cmdlet.|
|[Exchange cmdlet syntax](exchange-cmdlet-syntax.md)|Learn about the structure and syntax of cmdlets in Exchange PowerShell.|
|[Recipient filters in Exchange Management Shell commands](recipient-filters.md)|Learn about recipient filters in the Exchange Management Shell.|
|[Use Update-ExchangeHelp to update Exchange PowerShell help topics on Exchange servers](use-update-exchangehelp.md)|Learn how to use Update-ExchangeHelp to update help for Exchange cmdlet reference topics on Exchange servers.|
