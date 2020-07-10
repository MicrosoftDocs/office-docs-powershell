---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/set-outlookprotectionrule
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Set-OutlookProtectionRule
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019 || exchonline-ps"
---

# Set-OutlookProtectionRule

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-OutlookProtectionRule cmdlet to modify an existing Microsoft Outlook protection rule.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-OutlookProtectionRule [-Identity] <RuleIdParameter>
 [-ApplyRightsProtectionTemplate <RmsTemplateIdParameter>] [-Confirm] [-DomainController <Fqdn>] [-Force]
 [-FromDepartment <String[]>] [-Name <String>] [-Priority <Int32>] [-SentTo <MultiValuedProperty>]
 [-SentToScope <ToUserScope>] [-UserCanOverride <Boolean>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Outlook protection rules are used to automatically rights-protect email messages using a Rights Management Services (RMS) template before the message is sent. However, Outlook protection rules don't inspect message content. To rights-protect messages based on message content, use transport protection rules. For more information, see [Outlook protection rules](https://docs.microsoft.com/exchange/outlook-protection-rules-exchange-2013-help).

Not specifying any conditions results in an Outlook protection rule being applied to all messages.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-OutlookProtectionRule -Identity "OPR-DG-Finance" -SentTo "DG-Finance"
```

This example modifies the Outlook protection rule OPR-DG-Finance to apply to messages sent to the DG-Finance distribution group.

### Example 2
```powershell
Set-OutlookProtectionRule -Identity "OPR-DG-Finance" -Priority 2
```

This example sets the priority of the Outlook protection rule OPR-DG-Finance to 2.

## PARAMETERS

### -Identity
The Identity parameter specifies the rule.

```yaml
Type: RuleIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ApplyRightsProtectionTemplate
The ApplyRightsProtectionTemplate parameter specifies an RMS template to be applied to messages matching the conditions.

```yaml
Type: RmsTemplateIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress the confirmation prompt produced by the cmdlet when modifying a rule with no conditions, resulting in such rules being applied to all messages.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FromDepartment
The FromDepartment parameter specifies a department name. The rule is applied to messages where the sender's department attribute matches this value.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies a name for the rule.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority
The Priority parameter specifies a priority for the Outlook protection rule. Rule priority values can range from 0 through n-1, where n is the total number of existing Outlook protection rules.

Any existing rules with priority equal to or higher than the priority being set have their priority incremented by 1.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SentTo
The SentTo parameter specifies one or more recipients. External recipients can be specified using the SMTP address.

Internal recipients can be specified using any of the following values:

- Alias

- Distinguished name (DN)

- ExchangeGUID

- LegacyExchangeDN

- SmtpAddress

- User principal name (UPN)

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SentToScope
The SentToScope parameter specifies the scope of messages to which the rule applies. Valid values include:

- All: Applies to all messages.

- InOrganization: Applies to messages originating from inside the Exchange organization, where all recipients are also internal.

If not specified, the parameter defaults to All.

```yaml
Type: ToUserScope
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserCanOverride
The UserCanOverride parameter specifies whether the Outlook user can override the rule behavior, either by using a different RMS template, or by removing rights protection before sending the message. Valid values include:

- $true: User can override rule action.

- $false: User can't override rule action.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
