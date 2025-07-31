---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-retentionpolicy
schema: 2.0.0
title: Set-RetentionPolicy
---

# Set-RetentionPolicy

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-RetentionPolicy cmdlet to change the properties of an existing retention policy.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-RetentionPolicy [-Identity] <MailboxPolicyIdParameter>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-Force]
 [-IsDefault]
 [-IsDefaultArbitrationMailbox]
 [-Name <String>]
 [-RetentionId <Guid>]
 [-RetentionPolicyTagLinks <RetentionPolicyTagIdParameter[]>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-RetentionPolicy "MyPolicy" -RetentionPolicyTagLinks "MyRetentionPolicyTag"
```

This example modifies the policy MyPolicy to link the retention policy tag MyRetentionPolicyTag with it.

The Identity parameter is a positional parameter. Positional parameters can be used without the label (Identity). For more information about positional parameters, see [About Parameters](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_parameters).

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The Identity parameter specifies the name, distinguished name (DN), or GUID of the retention policy.

```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

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

### -Force

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Force switch hides warning or confirmation messages. You don't need to specify a value with this switch.

Use this switch to hide the confirmation prompt when you use the RetentionId parameter.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsDefault

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The IsDefault switch specifies that this retention policy is the default retention policy. You don't need to specify a value with this switch.

When you use this switch, you'll get a warning that this retention policy will replace the current default retention policy (the policy where the IsDefault property value is currently True) as the default. By default, the default retention policy is named Default MRM Policy.

**Note**: Changing which retention policy is the default might or might not affect new and existing mailboxes based on the value of the RetentionPolicy parameter on all mailbox plans:

- $null (blank): Changes to which retention policy is the default are continually reflected in new and existing mailboxes.
- A retention policy is specified: The value of the RetentionPolicy parameter for all mailbox plans should be $null (blank) or match the Exchange retention policy that's configured as the default policy for the organization. Otherwise, the experience might be inconsistent when creating new mailboxes, enabling disabled mailboxes, and changing licenses. For more information see [Mailbox plans in Exchange Online](https://learn.microsoft.com/exchange/recipients-in-exchange-online/manage-user-mailboxes/mailbox-plans).

If a mailbox is assigned an Exchange retention policy that's not the default policy, the RetentionPolicy value of the mailbox will be overwritten when changing licenses and will need to be manually reset to the original value.

Changes to the default retention policy that affect existing mailboxes can potentially saturate the network if there are hundreds or thousands of mailboxes that require updates.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsDefaultArbitrationMailbox

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The IsDefaultArbitrationMailbox switch configures this policy as the default retention policy for arbitration mailboxes in your Exchange Online organization. You don't need to specify a value with this switch.

This parameter isn't available in on-premises deployments.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Name parameter specifies a unique name for the retention policy.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RetentionId

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The RetentionId parameter specifies the identity of the retention policy to make sure mailboxes moved between two Exchange organizations continue to have the same retention policy applied to them. For example, in a cross-forest deployment or in a cross-premises deployment, when a mailbox is moved from an on-premises Exchange server to the cloud, or a cloud-based mailbox is moved to an on-premises Exchange server, this parameter is used to make sure the same retention policy is applied to the mailbox.

It's not normally required to specify or modify the RetentionId parameter for a retention tag. The parameter is populated automatically when importing retention tags using the Import-RetentionTags.ps1 script.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RetentionPolicyTagLinks

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The RetentionPolicyTagLinks parameter specifies the identity of retention policy tags to associate with the retention policy. Mailboxes that get a retention policy applied have retention tags linked with that retention policy.

```yaml
Type: RetentionPolicyTagIdParameter[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

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
