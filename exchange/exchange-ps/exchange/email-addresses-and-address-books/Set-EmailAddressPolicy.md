---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Set-EmailAddressPolicy
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019 || exchonline-ps"
---

# Set-EmailAddressPolicy

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-EmailAddressPolicy cmdlet to modify email address policies.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-EmailAddressPolicy [-Identity] <EmailAddressPolicyIdParameter> [-ConditionalCompany <MultiValuedProperty>]
 [-ConditionalCustomAttribute1 <MultiValuedProperty>] [-ConditionalCustomAttribute10 <MultiValuedProperty>]
 [-ConditionalCustomAttribute11 <MultiValuedProperty>] [-ConditionalCustomAttribute12 <MultiValuedProperty>]
 [-ConditionalCustomAttribute13 <MultiValuedProperty>] [-ConditionalCustomAttribute14 <MultiValuedProperty>]
 [-ConditionalCustomAttribute15 <MultiValuedProperty>] [-ConditionalCustomAttribute2 <MultiValuedProperty>]
 [-ConditionalCustomAttribute3 <MultiValuedProperty>] [-ConditionalCustomAttribute4 <MultiValuedProperty>]
 [-ConditionalCustomAttribute5 <MultiValuedProperty>] [-ConditionalCustomAttribute6 <MultiValuedProperty>]
 [-ConditionalCustomAttribute7 <MultiValuedProperty>] [-ConditionalCustomAttribute8 <MultiValuedProperty>]
 [-ConditionalCustomAttribute9 <MultiValuedProperty>] [-ConditionalDepartment <MultiValuedProperty>]
 [-ConditionalStateOrProvince <MultiValuedProperty>] [-Confirm]
 [-DisabledEmailAddressTemplates <ProxyAddressTemplateCollection>] [-DomainController <Fqdn>]
 [-EnabledEmailAddressTemplates <ProxyAddressTemplateCollection>] [-EnabledPrimarySMTPAddressTemplate <String>]
 [-ForceUpgrade]
 [-IncludedRecipients <None | MailboxUsers | Resources | MailContacts | MailGroups | MailUsers | AllRecipients>]
 [-Name <String>] [-Priority <EmailAddressPolicyPriority>]
 [-RecipientContainer <OrganizationalUnitIdParameter>] [-RecipientFilter <String>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
After you use the Set-EmailAddressPolicy cmdlet to modify an email address policy in an on-premises Exchange organization, you need to use the Update-EmailAddressPolicy cmdlet to apply the updated policy to recipients.

The Conditional parameters that are used with the IncludedRecipients parameter are subject to the following limitations:

- The EQV operator is used for every property value, as in "Department equals Sales". Wildcards and partial matches aren't supported.

- The OR operator is always used for multiple values of the same property, as in "Department equals Sales OR Marketing".

- The AND operator is always used for multiple properties, as in "Department equals Sales AND Company equals Contoso".

To create flexible filters that use any available recipient property and that aren't subject to these limitations, you can use the RecipientFilter parameter to create an OPath filter.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-EmailAddressPolicy -Identity "Southeast Executives" -ConditionalStateOrProvince @{Add="TX"}
```

In on-premises Exchange, this example modifies the existing email address policy named Southeast Executives by adding the State or province value TX (Texas) to the precanned recipient filter.

### -------------------------- Example 2 --------------------------
```
Set-EmailAddressPolicy -Identity "Contoso Corp" -DisabledEmailAddressTemplates $null
```

In on-premises Exchange, this example clears the disabled email address templates from the email address policy named Contoso Corp.

## PARAMETERS

### -Identity
The Identity parameter specifies the email address policy that you want to modify. You can use any value that uniquely identifies the policy. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: EmailAddressPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ConditionalCompany
This parameter is available only in on-premises Exchange.

The ConditionalCompany parameter specifies a filter that's based on the value of the recipient's Company property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute1
This parameter is available only in on-premises Exchange.

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute10
This parameter is available only in on-premises Exchange.

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute11
This parameter is available only in on-premises Exchange.

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute12
This parameter is available only in on-premises Exchange.

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute13
This parameter is available only in on-premises Exchange.

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute14
This parameter is available only in on-premises Exchange.

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute15
This parameter is available only in on-premises Exchange.

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute2
This parameter is available only in on-premises Exchange.

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute3
This parameter is available only in on-premises Exchange.

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute4
This parameter is available only in on-premises Exchange.

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute5
This parameter is available only in on-premises Exchange.

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute6
This parameter is available only in on-premises Exchange.

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute7
This parameter is available only in on-premises Exchange.

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute8
This parameter is available only in on-premises Exchange.

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute9
This parameter is available only in on-premises Exchange.

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalDepartment
This parameter is available only in on-premises Exchange.

The ConditionalDepartment parameter specifies a filter that's based on the value of the recipient's Department property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalStateOrProvince
This parameter is available only in on-premises Exchange.

The ConditionalStateOrProvince parameter specifies a filter that's based on the value of the recipient's StateOrProvince property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisabledEmailAddressTemplates
This parameter is available only in on-premises Exchange.

The DisabledEmailAddressTemplates parameter specifies the proxy email addresses templates that are included in an email address policy, but aren't used to configure the email addresses of recipients.

Valid syntax for this parameter is \<Type\>:\<AddressFormat\>:

- \<Type\>: A valid email address type as described in the "Address types" section in Email address policies in Exchange 2016 (https://technet.microsoft.com/library/bb232171.aspx). For example, smtp or X400. Note that you can't use SMTP to specify a disabled primary SMTP email address.

- \<AddressFormat\>: For SMTP email addresses, a domain or subdomain that's configured as accepted domain (authoritative or internal relay), and valid variables and ASCII text characters as described in the "Address formats" section in Email address policies in Exchange 2016 (https://technet.microsoft.com/library/bb232171.aspx). For example: \<alias\>@contoso.com requires the value %m@contoso.com, and \<firstname\>.\<lastname\>@contoso.com requires the value %g.%s@contoso.com.

You can specify multiple disabled email address templates separated by commas: "[\<Type1\>]:\<EmailAddress1\>","[\<Type2\>]:\<EmailAddress2\>",..."[\<TypeN\>]:\<EmailAddressN\>".

Typically, this property is only populated by values after a migration from a previous version of Exchange. To clear these values, use the value $null for this parameter.

```yaml
Type: ProxyAddressTemplateCollection
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnabledEmailAddressTemplates
The EnabledEmailAddressTemplates parameter specifies the rules in the email address policy that are used to generate email addresses for recipients.

Valid syntax for this parameter is \<Type\>:\<AddressFormat\>:

- \<Type\>: A valid email address type as described in "Address types" section in Email address policies in Exchange 2016 (https://technet.microsoft.com/library/bb232171.aspx). For example, SMTP for the primary email address, and smtp for proxy addresses.

- \<AddressFormat\>: For SMTP email addresses, a domain or subdomain that's configured as accepted domain (authoritative or internal relay), and valid variables and ASCII text characters as described in the "Address formats" section in Email address policies in Exchange 2016 (https://technet.microsoft.com/library/bb232171.aspx). For example: \<alias\>@contoso.com requires the value %m@contoso.com, and \<firstname\>.\<lastname\>@contoso.com requires the value %g.%s@contoso.com.

This parameter requires at least one template with the \<Type\> value SMTP (to define the primary SMTP email address). After that, if you don't include a \<Type\> prefix for a template, the value smtp (an SMTP proxy address) is assumed.

You can specify multiple email address templates separated by commas: "SMTP:\<PrimarySMTPEmailAddress\>","[\<Type1\>]:\<EmailAddress1\>","[\<Type2\>]:\<EmailAddress2\>",..."[\<TypeN\>]:\<EmailAddressN\>".

You can't use this parameter with the EnabledPrimarySMTPAddressTemplate parameter.

In Office 365, if you use this parameter with the IncludeUnifiedGroupRecipients, you can't use variables in the email address template.

```yaml
Type: ProxyAddressTemplateCollection
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnabledPrimarySMTPAddressTemplate
The EnabledPrimarySMTPAddressTemplate parameter specifies the specifies the rule in the email address policy that's used to generate the primary SMTP email addresses for recipients. You can use this parameter instead of the EnabledEmailAddressTemplates if the policy only applies the primary email address and no additional proxy addresses.

Valid syntax for this parameter is a domain or subdomain that's configured as an authoritative accepted domain, and valid variables and ASCII text characters as described in the "Address format" section in Email address policies in Exchange 2016 (https://technet.microsoft.com/library/bb232171.aspx). For example: \<alias\>@contoso.com requires the value %m@contoso.com, and \<firstname\>.\<lastname\>@contoso.com requires the value %g.%s@contoso.com.

You can't use this parameter with the EnabledEmailAddressTemplates parameter.

In Office 365, if you use this parameter with the IncludeUnifiedGroupRecipients, you can't use variables in the email address template.

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

### -ForceUpgrade
The ForceUpgrade switch specifies whether to suppress the confirmation message that appears if the object was created in a previous version of Exchange. You don't need to specify a value with this switch.

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

### -IncludedRecipients
This parameter is available only in on-premises Exchange.

The IncludedRecipients parameter specifies a filter that's based on the recipient type. Valid values are:

- AllRecipients: This value can be used only by itself.

- MailboxUsers

- MailContacts

- MailGroups

- MailUsers

- Resources: This value indicates room or equipment mailboxes.

You can specify multiple values separated by commas. When you use multiple values, the OR Boolean operator is applied.

You need to use this parameter when you use any of the Conditional parameters. You can't use this parameter with the RecipientFilter parameter.

```yaml
Type: None | MailboxUsers | Resources | MailContacts | MailGroups | MailUsers | AllRecipients
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the unique name for the email address policy. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

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
The Priority parameter specifies the order that the email address policies are evaluated. By default, every time that you add a new email address policy, the policy is assigned a priority of N+1, where N is the number of email address policies that you've created.

If you set this parameter to a value that's the same as another email address policy, the priority of the policy that you added first is incremented by 1.

Note: The first email address policy that identifies a recipient configures the recipient's email addresses. All other policies are ignored, even if the first policy is unapplied and can't configure the recipient's email addresses.

```yaml
Type: EmailAddressPolicyPriority
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientContainer
This parameter is available only in on-premises Exchange.

The RecipientContainer parameter specifies a filter that's based on the recipient's location in Active Directory. Valid input for this parameter is an organizational unit (OU) or domain that's visible using the Get-OrganizationalUnit cmdlet. You can use any value that uniquely identifies the OU or domain. For example:

- Name

- Canonical name

- Distinguished name (DN)

- GUID

If you don't use this parameter, the default value is the OU where the object was created.

```yaml
Type: OrganizationalUnitIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientFilter
This parameter is available only in on-premises Exchange.

The RecipientFilter parameter specifies an OPath filter that's based on the value of any available recipient property. You can use any available Windows PowerShell operator, and wildcards and partial matches are supported. When you use this parameter, remember the following OPath filter rules:

- Use braces { } around the whole OPath syntax string.

- Include a hyphen before all operators.

- In cloud-based environments, you can't use a wildcard as the first character. For example, Sales\* is allowed, but \*Sales isn't allowed.

For more information, see Filterable properties for the -RecipientFilter parameter (https://technet.microsoft.com/library/bb738157.aspx).

You can't use this parameter with the IncludedRecipients parameter or any of the Conditional parameters.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
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

[Online Version](https://technet.microsoft.com/library/c5829edd-8b7d-4437-b17f-bae76ea237e8.aspx)
