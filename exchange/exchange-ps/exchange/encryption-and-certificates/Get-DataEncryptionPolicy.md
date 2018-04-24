---
external help file: Microsoft.Exchange.WebClient-Help.xml
applicable: Exchange Online
title: Get-DataEncryptionPolicy
schema: 2.0.0
monikerRange: "exchonline-ps"
---

# Get-DataEncryptionPolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-DataEncryptionPolicy cmdlet to view data encryption policies in Exchange Online.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-DataEncryptionPolicy [[-Identity] <DataEncryptionPolicyIdParameter>] [-Confirm] [-DomainController <Fqdn>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Data encryption policy cmdlets are the Exchange Online part of service encryption with Customer Key in Office 365. For more information, see Controlling your data in Office 365 using Customer Key (https://aka.ms/customerkey).

You can assign a data encryption policy to a mailbox by using the DataEncryptionPolicy parameter on the Set-Mailbox cmdlet in Exchange Online PowerShell.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-DataEncryptionPolicy
```

This example returns a summary list of all data encryption policies in the organization.

### -------------------------- Example 2 --------------------------
```
Get-DataEncryptionPolicy -Identity "Europe Mailboxes"
```

The example returns detailed information for the data encryption policy named Europe Mailboxes.

## PARAMETERS

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

### -DomainController
This parameter is reserved for internal Microsoft use.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the data encryption policy that you want to view. You can use any value that uniquely identifies the policy. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: DataEncryptionPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -WhatIf
This parameter is reserved for internal Microsoft use.

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

[Online Version](https://technet.microsoft.com/library/198d07a9-6163-4230-9b34-523a6a2107ea.aspx)
