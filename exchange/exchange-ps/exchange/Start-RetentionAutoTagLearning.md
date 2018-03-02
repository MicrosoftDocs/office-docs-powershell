---
applicable: Exchange Server 2010
schema: 2.0.0
---

# Start-RetentionAutoTagLearning

## SYNOPSIS
Use the Start-RetentionAutoTagLearning cmdlet to start auto-tagging for a specified mailbox or to cross-validate auto-tagging results for the mailbox.

Messaging records management (MRM) must be configured before the Start-RetentionAutoTagLearning cmdlet can be used. For more information, see Understanding Retention Tags and Retention Policies.

## SYNTAX

### Set3
```
Start-RetentionAutoTagLearning [-Identity] <MailboxIdParameter> [-CrossValidate] [-Confirm]
 [-DomainController <Fqdn>] [-NumberOfSegments <Int32>] [-WhatIf] [<CommonParameters>]
```

### Set2
```
Start-RetentionAutoTagLearning [-Identity] <MailboxIdParameter> [-Clear] [-Confirm] [-DomainController <Fqdn>]
 [-Train] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Messaging records management" entry in the Messaging Policy and Compliance Permissions topic.

## EXAMPLES

### Example 1
```
Start-RetentionAutoTagLearning -Identity "Joe Healy" -Train
```

This example sets user Joe Healy's mailbox to train.

### Example 2
```
Start-RetentionAutoTagLearning -Identity "Joe Healy" -CrossValidate -NumberOfSegments 15
```

This example sets user Joe Healy's mailbox to cross-validate and sets the number of segments for cross-validation to 15.

### Example 3
```
Start-RetentionAutoTagLearning -Identity "Joe Healy" -Clear
```

This example sets user Joe Healy's mailbox to clear all retention policy tags assigned by auto-tagging.

## PARAMETERS

### -CrossValidate
The CrossValidate switch specifies whether items in the specified mailbox are being auto-tagged.

```yaml
Type: SwitchParameter
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2010

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter identifies the mailbox. You can use one of the following values:

- GUID

- Distinguished name (DN)

- Domain\\Account

- User principal name (UPN)

- LegacyExchangeDN

- SmtpAddress

- Alias

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
Parameter Sets: Set2
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
Aliases:
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

The NumberOfSegments parameter can be used only in conjunction with the CrossValidate parameter.

```yaml
Type: Int32
Parameter Sets: Set3
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
Parameter Sets: Set2
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
Aliases:
Applicable: Exchange Server 2010

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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/b760ee59-89f0-4d73-94e4-ac816584b13c.aspx)

