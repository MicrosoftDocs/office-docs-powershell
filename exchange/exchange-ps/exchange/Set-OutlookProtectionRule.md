---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Set-OutlookProtectionRule

## SYNOPSIS
!!! Exchange Server 2010

Use the Set-OutlookProtectionRule cmdlet to modify an existing Microsoft Outlook protection rule.

Not specifying any conditions results in an Outlook protection rule being applied to all messages.

!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-OutlookProtectionRule cmdlet to modify an existing Microsoft Outlook protection rule.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-OutlookProtectionRule [-Identity] <RuleIdParameter>
 [-ApplyRightsProtectionTemplate <RmsTemplateIdParameter>] [-Confirm] [-DomainController <Fqdn>] [-Force]
 [-FromDepartment <String[]>] [-Name <String>] [-Priority <Int32>] [-SentTo <MultiValuedProperty>]
 [-SentToScope <All | InOrganization>] [-UserCanOverride <$true | $false>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

Outlook protection rules are used to automatically rights-protect e-mail messages using a Rights Management Services (RMS) template before the message is sent. However, Outlook protection rules don't inspect message content. To rights-protect messages based on message content, use transport protection rules. For more information, see Understanding Outlook Protection Rules.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Rights protection" entry in the Messaging Policy and Compliance Permissions topic.

!!! Exchange Server 2013

Outlook protection rules are used to automatically rights-protect email messages using a Rights Management Services (RMS) template before the message is sent. However, Outlook protection rules don't inspect message content. To rights-protect messages based on message content, use transport protection rules. For more information, see Outlook protection rules.

Not specifying any conditions results in an Outlook protection rule being applied to all messages.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Information Rights Management (IRM) configuration" entry in the Messaging policy and compliance permissions topic.

!!! Exchange Server 2016, Exchange Online

Outlook protection rules are used to automatically rights-protect email messages using a Rights Management Services (RMS) template before the message is sent. However, Outlook protection rules don't inspect message content. To rights-protect messages based on message content, use transport protection rules. For more information, see Outlook protection rules.

Not specifying any conditions results in an Outlook protection rule being applied to all messages.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Set-OutlookProtectionRule -Identity "OPR-DG-Finance" -SentTo "DG-Finance"
```

This example modifies the Outlook protection rule OPR-DG-Finance to apply to messages sent to the DG-Finance distribution group.

### Example 1 -------------------------- (Exchange Server 2013)
```
Set-OutlookProtectionRule -Identity "OPR-DG-Finance" -SentTo "DG-Finance"
```

This example modifies the Outlook protection rule OPR-DG-Finance to apply to messages sent to the DG-Finance distribution group.

### Example 1 -------------------------- (Exchange Server 2016)
```
Set-OutlookProtectionRule -Identity "OPR-DG-Finance" -SentTo "DG-Finance"
```

This example modifies the Outlook protection rule OPR-DG-Finance to apply to messages sent to the DG-Finance distribution group.

### Example 1 -------------------------- (Exchange Online)
```
Set-OutlookProtectionRule -Identity "OPR-DG-Finance" -SentTo "DG-Finance"
```

This example modifies the Outlook protection rule OPR-DG-Finance to apply to messages sent to the DG-Finance distribution group.

### Example 2 -------------------------- (Exchange Server 2010)
```
Set-OutlookProtectionRule -Identity "OPR-DG-Finance" -Priority 2
```

This example sets the priority of the Outlook protection rule OPR-DG-Finance to 2.

### Example 2 -------------------------- (Exchange Server 2013)
```
Set-OutlookProtectionRule -Identity "OPR-DG-Finance" -Priority 2
```

This example sets the priority of the Outlook protection rule OPR-DG-Finance to 2.

### Example 2 -------------------------- (Exchange Server 2016)
```
Set-OutlookProtectionRule -Identity "OPR-DG-Finance" -Priority 2
```

This example sets the priority of the Outlook protection rule OPR-DG-Finance to 2.

### Example 2 -------------------------- (Exchange Online)
```
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm
!!! Exchange Server 2010, Exchange Server 2013

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-* and Set-* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.



!!! Exchange Server 2016, Exchange Online

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
!!! Exchange Server 2010

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SentToScope
!!! Exchange Server 2010, Exchange Server 2013

The SentToScope parameter specifies the scope of messages to which the rule applies. Valid values include:

- All Applies to all messages.

- InOrganization Applies to messages originating from inside the Exchange organization, where all recipients are also internal.

If not specified, the parameter defaults to All.



!!! Exchange Server 2016, Exchange Online

The SentToScope parameter specifies the scope of messages to which the rule applies. Valid values include:

- All: Applies to all messages.

- InOrganization: Applies to messages originating from inside the Exchange organization, where all recipients are also internal.

If not specified, the parameter defaults to All.



```yaml
Type: All | InOrganization
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserCanOverride
!!! Exchange Server 2010

The UserCanOverride parameter specifies whether the Outlook user can override the rule behavior, either by using a different RMS template, or by removing rights protection, before sending the message. Valid values include:

- $true User can override rule action.

- $false User can't override rule action.



!!! Exchange Server 2013

The UserCanOverride parameter specifies whether the Outlook user can override the rule behavior, either by using a different RMS template, or by removing rights protection before sending the message. Valid values include:

- $true User can override rule action.

- $false User can't override rule action.



!!! Exchange Server 2016, Exchange Online

The UserCanOverride parameter specifies whether the Outlook user can override the rule behavior, either by using a different RMS template, or by removing rights protection before sending the message. Valid values include:

- $true: User can override rule action.

- $false: User can't override rule action.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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

[Online Version](https://technet.microsoft.com/library/55878738-7045-4a38-87fe-2ecd01f8303a.aspx)

