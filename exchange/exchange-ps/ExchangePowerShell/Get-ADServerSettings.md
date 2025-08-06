---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
author: chrisda
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-adserversettings
schema: 2.0.0
title: Get-ADServerSettings
---

# Get-ADServerSettings

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-ADServerSettings cmdlet to view the Active Directory Domain Services (AD DS) environment settings in the current Exchange Management Shell session. The Get-ADServerSettings cmdlet replaces the AdminSessionADSettings session variable that was used in Exchange Server 2007.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-ADServerSettings [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-ADServerSettings | Format-List
```

This example displays the session settings for the current session.

For more information about pipelining and the Format-List cmdlet, see [About Pipelines](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_pipelines) and [Working with command output](https://learn.microsoft.com/exchange/working-with-command-output-exchange-2013-help).

## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
