---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
applicable: Exchange Online, Exchange Online Protection
title: Delete-QuarantineMessage
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps || eop-ps"
---

# Delete-QuarantineMessage

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Delete-QuarantineMessage cmdlet to delete quarantine messages from your cloud-based organization

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Identities
```
Delete-QuarantineMessage -Identities <QuarantineMessageIdentity[]> [-Identity <QuarantineMessageIdentity>]
 [-Confirm] [-WhatIf] [<CommonParameters>]
```

### IdentityOnly
```
Delete-QuarantineMessage -Identity <QuarantineMessageIdentity> [-Confirm] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Delete-QuarantineMessage -Identity c14401cf-aa9a-465b-cfd5-08d0f0ca37c5\4c2ca98e-94ea-db3a-7eb8-3b63657d4db7
```

This example deletes the quarantined message with the specified Identity value.

### -------------------------- Example 2 --------------------------
```
$ids = Get-QuarantineMessage | select -ExpandProperty Identity; Delete-QuarantineMessage -Identity $ids[4]
```

This example deletes the 5th quarantined message in the list of results from Get-QuarantineMessage. The first message has the index number 0, the second has the index number 1 and so on).

### -------------------------- Example 3 --------------------------
```
$ids = Get-QuarantineMessage | select -ExpandProperty Identity; Delete-QuarantineMessage -Identities $ids -Identity 000
```

This example deletes all quarantined messages. The Identity parameter is required, but the value 000 is ignored.

## PARAMETERS

### -Identities
The Identities parameter identifies quarantined messages for bulk operations. You identify the messages by using the syntax: value1,value2...valueN. The value is a unique quarantined message identifier in the format GUID1\\GUID2 (for example c14401cf-aa9a-465b-cfd5-08d0f0ca37c5\\4c2ca98e-94ea-db3a-7eb8-3b63657d4db7.

You can find the identity value for a quarantined message by using the Get-QuarantineMessage cmdlet.

When you use this parameter, the Identity parameter is required, but the value is ignored. For example, use the value 000 for the Identity parameter.

```yaml
Type: QuarantineMessageIdentity[]
Parameter Sets: Identities
Aliases:
Applicable: Exchange Online, Exchange Online Protection
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the quarantined message that you want to delete. The value is a unique quarantined message identifier in the format GUID1\\GUID2 (for example c14401cf-aa9a-465b-cfd5-08d0f0ca37c5\\4c2ca98e-94ea-db3a-7eb8-3b63657d4db7.

You can find the Identity value for a quarantined message by using the Get-QuarantineMessage cmdlet.

```yaml
Type: QuarantineMessageIdentity
Parameter Sets: Identities
Aliases:
Applicable: Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

```yaml
Type: QuarantineMessageIdentity
Parameter Sets: IdentityOnly
Aliases:
Applicable: Exchange Online, Exchange Online Protection
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
Applicable: Exchange Online, Exchange Online Protection
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
Applicable: Exchange Online, Exchange Online Protection
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

## OUTPUTS

###  

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/9f54e202-2a8a-4e98-a7ab-a944d6dde6d5.aspx)
