---
external help file: Microsoft.Exchange.CalendarsAndGroups-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-onlinemeetingconfiguration
applicable: Exchange Online
title: Get-OnlineMeetingConfiguration
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps"
---

# Get-OnlineMeetingConfiguration

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-OnlineMeetingConfiguration cmdlet to view status and usage information about Skype Meetings and Skype for Business Online for mailboxes. Skype Meetings automatically includes Skype for Business Online conference join information in Exchange Online meeting invitations.

**Note**: We recommend that you use the Exchange Online PowerShell V2 module to connect to Exchange Online PowerShell. For instructions, see [Use the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online-powershell-v2).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-OnlineMeetingConfiguration [-Identity] <MailboxIdParameter> [<CommonParameters>]
```

## DESCRIPTION
Exchange Online maintains a per-user cache of Skype for Business Online meeting information that's updated every 24 hours. The Get-OnlineMeetingConfiguration cmdlet provides the following information about the Skype Meetings configuration and the Skype for Business Online meeting information for the user:

- IsAutoOnlineMeetingEnabled: Indicates if Skype Meetings is enabled for the mailbox.

- OnlineMeetingInfo: Skype for Business Online meeting coordinates.

- LastSyncTime: The last time Exchange Online successfully synchronized meeting coordinates from Skype for Business Online.

- LastSuccessfulSyncTime: The last time Exchange Online successfully cleaned the cached of used Skype for Business Online meeting coordinates.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-OnlineMeetingConfiguration -Identity carlam@fourthcoffee.com
```

This example gets the Skype Meetings configuration for the specified mailbox.

## PARAMETERS

### -Identity
The Identity parameter specifies the mailbox that you want to view. You can use any value that uniquely identifies the mailbox. For example:

- Name

- Alias

- Distinguished name (DN)

- Canonical DN

- \<domain name\>\\\<account name\>

- Email address

- GUID

- LegacyExchangeDN

- SamAccountName

- User ID or user principal name (UPN)

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS
