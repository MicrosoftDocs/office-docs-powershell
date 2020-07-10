---
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/start-retentionautotaglearning
applicable: Exchange Server 2010
title: Start-RetentionAutoTagLearning
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2010"
---

# Start-RetentionAutoTagLearning

## SYNOPSIS
This cmdlet is available only in Exchange Server 2010.

Use the Start-RetentionAutoTagLearning cmdlet to start auto-tagging for a specified mailbox or to cross-validate auto-tagging results for the mailbox.

Messaging records management (MRM) must be configured before the Start-RetentionAutoTagLearning cmdlet can be used. For more information, see [Understanding Retention Tags and Retention Policies](https://docs.microsoft.com/previous-versions/office/exchange-server-2010/dd297955(v=exchg.141)).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### CrossValidate
```
Start-RetentionAutoTagLearning [-Identity] <MailboxIdParameter> [-CrossValidate] [-NumberOfSegments <Int32>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-WhatIf] [<CommonParameters>]
```

### Train
```
Start-RetentionAutoTagLearning [-Identity] <MailboxIdParameter> [-Clear] [-Train]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Start-RetentionAutoTagLearning -Identity "Joe Healy" -Train
```

This example sets user Joe Healy's mailbox to train.

### Example 2
```powershell
Start-RetentionAutoTagLearning -Identity "Joe Healy" -CrossValidate -NumberOfSegments 15
```

This example sets user Joe Healy's mailbox to cross-validate and sets the number of segments for cross-validation to 15.

### Example 3
```powershell
Start-RetentionAutoTagLearning -Identity "Joe Healy" -Clear
```

This example sets user Joe Healy's mailbox to clear all retention policy tags assigned by auto-tagging.

## PARAMETERS

### -CrossValidate
The CrossValidate switch specifies whether items in the specified mailbox are being auto-tagged.

```yaml
Type: SwitchParameter
Parameter Sets: CrossValidate
Aliases:
Applicable: Exchange Server 2010

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter identifies the mailbox. You can use any value that uniquely identifies the mailbox. For example:

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
Applicable: Exchange Server 2010

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Clear
The Clear switch specifies whether to clear auto-tags from the specified mailbox.

```yaml
Type: SwitchParameter
Parameter Sets: Train
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
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
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NumberOfSegments
The NumberOfSegments parameter specifies the number of segments. Auto-tagging divides a mailbox into the number of segments specified and learns tagging behavior from n-1 segments. Tags are then predicted for items in the remaining segment based on this behavior. This is done for each segment.

The default value is 10.

The minimum value is 2.

You csn only use this parameter with the CrossValidate parameter.

```yaml
Type: Int32
Parameter Sets: CrossValidate
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Train
The Train switch specifies whether to start the training algorithm for auto-tagging on the specified mailbox. This switch is especially useful for retraining. No values are required with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Train
Aliases:
Applicable: Exchange Server 2010

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
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=2081749). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=2081749). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
