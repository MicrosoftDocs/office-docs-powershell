---
applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online
author: chrisda
external help file: Microsoft.Exchange.CalendarsAndGroups-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-onlinemeetingconfiguration
schema: 2.0.0
title: Get-OnlineMeetingConfiguration
---

# Get-OnlineMeetingConfiguration

## SYNOPSIS
This cmdlet is functional only in the cloud-based service.

Use the Get-OnlineMeetingConfiguration cmdlet to view status and usage information about Skype Meetings and Skype for Business Online for mailboxes. Skype Meetings automatically includes Skype for Business Online conference join information in Exchange Online meeting invitations.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-OnlineMeetingConfiguration [-Identity] <MailboxIdParameter>
 [-DomainController <Fqdn>]
 [<CommonParameters>]
```

## DESCRIPTION
Exchange Online maintains a per-user cache of Skype for Business Online meeting information that's updated every 24 hours. The Get-OnlineMeetingConfiguration cmdlet provides the following information about the Skype Meetings configuration and the Skype for Business Online meeting information for the user:

- IsAutoOnlineMeetingEnabled: Indicates if Skype Meetings is enabled for the mailbox.
- OnlineMeetingInfo: Skype for Business Online meeting coordinates.
- LastSyncTime: The last time Exchange Online successfully synchronized meeting coordinates from Skype for Business Online.
- LastSuccessfulSyncTime: The last time Exchange Online successfully cleaned the cached of used Skype for Business Online meeting coordinates.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-OnlineMeetingConfiguration -Identity carlam@fourthcoffee.com
```

This example gets the Skype Meetings configuration for the specified mailbox.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The Identity parameter specifies the mailbox that you want to view. You can use any value that uniquely identifies the mailbox. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Domain\\Username
- Email address
- GUID
- LegacyExchangeDN
- SamAccountName
- User ID or user principal name (UPN)

**Caution**: The value $null or a non-existent value for the Identity parameter returns *all* objects as if you ran the Get- command without the Identity parameter. Verify any lists of values for the Identity parameter are accurate and don't contain non-existent $null values.

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is reserved for internal Microsoft use.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
