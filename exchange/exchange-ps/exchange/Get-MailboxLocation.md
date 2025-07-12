---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-mailboxlocation
applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Get-MailboxLocation
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Get-MailboxLocation

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-MailboxLocation cmdlet to view mailbox location information in Exchange Online.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### DatabaseSet
```
Get-MailboxLocation -Database <DatabaseIdParameter>
 [-Confirm]
 [-MailboxLocationType <MailboxLocationType>]
 [-ResultSize <Unlimited>]
 [-WhatIf]
 [<CommonParameters>]
```

### Identity
```
Get-MailboxLocation -Identity <MailboxLocationIdParameter>
 [-Confirm]
 [-MailboxLocationType <MailboxLocationType>]
 [-ResultSize <Unlimited>]
 [-WhatIf]
 [<CommonParameters>]
```

### User
```
Get-MailboxLocation -User <UserIdParameter>
 [-IncludePreviousPrimary]
 [-Confirm]
 [-MailboxLocationType <MailboxLocationType>]
 [-ResultSize <Unlimited>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-MailboxLocation -User chris@contoso.com
```

In Exchange Online, this example returns the mailbox location information for the user chris@contoso.com.

### Example 2
```powershell
Get-MailboxLocation -Identity e15664af-82ed-4635-b02a-df7c2e03d950
```

In Exchange Server or Exchange Online, this example returns the mailbox location information for the specified mailbox GUID (the ExchangeGuid property value from the results of `Get-Mailbox -Identity <MailboxIdentity> | Format-List ExchangeGuid`).

## PARAMETERS

### -Database
This parameter is available only in on-premises Exchange.

The Database parameter returns the mailbox location information for all mailboxes on the specified mailbox database. You can use any value that uniquely identifies the database. For example:

- Name
- Distinguished name (DN)
- GUID

You can't use this parameter with the Identity parameter.

```yaml
Type: DatabaseIdParameter
Parameter Sets: DatabaseSet
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the mailbox location object that you want to view. The value uses the either of the following formats:

- TenantGUID\\MailboxGUID
- MailboxGUID

In Exchange Server or Exchange Online, you can run the following command to find and compare the MailboxGUID values for the user: `Get-Mailbox -Identity <MailboxIdentity> | Format-List *GUID,MailboxLocations`.

In Exchange Online, you can find the TenantGUID and MailboxGUID values after you run Get-MailboxLocation with the User parameter.

You can't use this parameter with the User parameter.

```yaml
Type: MailboxLocationIdParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -User
This parameter is available only in the cloud-based service.

The User parameter specifies the user whose mailbox location you want to view. You can use any value that uniquely identifies the user. For example:

- Name
- Distinguished name (DN)
- Canonical DN
- GUID

You can't use this parameter with the Identity parameter.

```yaml
Type: UserIdParameter
Parameter Sets: User
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludePreviousPrimary
This parameter is available only in the cloud-based service.

The IncludePreviousPrimary switch specifies whether to include the previous primary mailbox in the results. You don't need to specify a value with this switch.

You can only use this switch with the User parameter.

```yaml
Type: SwitchParameter
Parameter Sets: User
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxLocationType
The MailboxLocationType filters the results by the type of mailbox. Valid values are:

- Aggregated
- AuxArchive
- AuxPrimary
- ComponentShared
- MainArchive
- PreviousPrimary (Exchange Online only)
- Primary

```yaml
Type: MailboxLocationType
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

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
