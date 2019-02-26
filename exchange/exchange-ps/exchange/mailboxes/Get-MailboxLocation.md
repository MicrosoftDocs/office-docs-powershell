---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Online
title: Get-MailboxLocation
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps"
---

# Get-MailboxLocation

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-MailboxLocation cmdlet to view mailbox location information in Exchange Online.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### DatabaseSet
```
Get-MailboxLocation -Database <DatabaseIdParameter> [-Confirm]
 [-MailboxLocationType <Primary | MainArchive | AuxArchive | Aggregated | AuxPrimary | ComponentShared>]
 [-ResultSize <Unlimited>] [-WhatIf] [<CommonParameters>]
```

### Identity
```
Get-MailboxLocation -Identity <MailboxLocationIdParameter> [-Confirm]
 [-MailboxLocationType <Primary | MainArchive | AuxArchive | Aggregated | AuxPrimary | ComponentShared>]
 [-ResultSize <Unlimited>] [-WhatIf] [<CommonParameters>]
```

### User
```
Get-MailboxLocation -User <UserIdParameter> [-Confirm]
 [-MailboxLocationType <Primary | MainArchive | AuxArchive | Aggregated | AuxPrimary | ComponentShared>]
 [-ResultSize <Unlimited>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-MailboxLocation -User chris@contoso.com
```

This example returns the mailbox location for the user chris@contoso.com.

## PARAMETERS

### -Database
This parameter is reserved for internal Microsoft use.

```yaml
Type: DatabaseIdParameter
Parameter Sets: DatabaseSet
Aliases:
Applicable: Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the mailbox location object that you want to view. The value uses the syntax \<GUID1\>\\\<GUID2\>. Typically, you can only find this value after you run Get-MailboxLocation with the User parameter.

You can't use this parameter with the User parameter.

```yaml
Type: MailboxLocationIdParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -User
The User parameter specifies the user whose mailbox location you want to view. You can use any value that uniquely identifies the user.

For example:

- Name

- Display name

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

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
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

- Primary

- RemotePrimary

```yaml
Type: Primary | MainArchive | AuxArchive | Aggregated | AuxPrimary | ComponentShared
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
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
Applicable: Exchange Online
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
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://docs.microsoft.com/powershell/module/exchange/mailboxes/get-mailboxlocation)
