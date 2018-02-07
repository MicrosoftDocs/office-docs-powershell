---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# New-GlobalAddressList

## SYNOPSIS
!!! Exchange Server 2010

Use the New-GlobalAddressList cmdlet to create a global address list (GAL).

!!! Exchange Server 2013

This cmdlet is available only in on-premises Exchange.

Use the New-GlobalAddressList cmdlet to create a global address list (GAL).

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the New-GlobalAddressList cmdlet to create a global address list (GAL).

By default in Exchange Online, the Address List role isn't assigned to any role groups. To use any cmdlets that require the Address List role, you need to add the role to a role group. For more information, see the "Add a role to a role group" section in the topic, Manage role groups.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
New-GlobalAddressList [-Name] <String> [-ConditionalCompany <MultiValuedProperty>]
 [-ConditionalCustomAttribute1 <MultiValuedProperty>] [-ConditionalCustomAttribute10 <MultiValuedProperty>]
 [-ConditionalCustomAttribute11 <MultiValuedProperty>] [-ConditionalCustomAttribute12 <MultiValuedProperty>]
 [-ConditionalCustomAttribute13 <MultiValuedProperty>] [-ConditionalCustomAttribute14 <MultiValuedProperty>]
 [-ConditionalCustomAttribute15 <MultiValuedProperty>] [-ConditionalCustomAttribute2 <MultiValuedProperty>]
 [-ConditionalCustomAttribute3 <MultiValuedProperty>] [-ConditionalCustomAttribute4 <MultiValuedProperty>]
 [-ConditionalCustomAttribute5 <MultiValuedProperty>] [-ConditionalCustomAttribute6 <MultiValuedProperty>]
 [-ConditionalCustomAttribute7 <MultiValuedProperty>] [-ConditionalCustomAttribute8 <MultiValuedProperty>]
 [-ConditionalCustomAttribute9 <MultiValuedProperty>] [-ConditionalDepartment <MultiValuedProperty>]
 [-ConditionalStateOrProvince <MultiValuedProperty>] [-Confirm] [-DomainController <Fqdn>]
 [-IncludedRecipients <None | MailboxUsers | Resources | MailContacts | MailGroups | MailUsers | AllRecipients>]
 [-Organization <OrganizationIdParameter>] [-RecipientContainer <OrganizationalUnitIdParameter>] [-WhatIf]
 [<CommonParameters>]
```

### Set2
```
New-GlobalAddressList [-Name] <String> [-Confirm] [-DomainController <Fqdn>]
 [-Organization <OrganizationIdParameter>] [-RecipientContainer <OrganizationalUnitIdParameter>]
 [-RecipientFilter <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The GAL is created under the Microsoft Exchange Organization configuration container in Active Directory.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Global address lists" entry in the Mailbox Permissions topic.

!!! Exchange Server 2013

The GAL is created under the MicrosoftExchange Organization configuration container in Active Directory.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Global address lists" entry in the Email address and address book permissions topic.

By default in Exchange Online, the Address List role isn't assigned to any role groups. To use any cmdlets that require the Address List role, you need to add the role to a role group. For more information, see the "Add a role to a role group" section in the topic, Manage role groups.

!!! Exchange Server 2016, Exchange Online

The Conditional parameters that are used with the IncludedRecipients parameter are subject to the following limitations:

- The EQV operator is used for every property value, as in "Department equals Sales". Wildcards and partial matches aren't supported.

- The OR operator is always used for multiple values of the same property, as in "Department equals Sales OR Marketing".

- The AND operator is always used for multiple properties, as in "Department equals Sales AND Company equals Contoso".

To create flexible filters that use any available recipient property and that aren't subject to these limitations, you can use the RecipientFilter parameter to create an OPath filter.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
New-GlobalAddressList -Name NewGAL
```

This example creates the GAL NewGAL.

### Example 1 -------------------------- (Exchange Server 2013)
```
New-GlobalAddressList -Name NewGAL
```

This example creates the GAL NewGAL.

### Example 1 -------------------------- (Exchange Server 2016)
```
New-GlobalAddressList -Name "NewGAL"
```

This example creates the GAL named NewGAL.

### Example 1 -------------------------- (Exchange Online)
```
New-GlobalAddressList -Name "NewGAL"
```

This example creates the GAL named NewGAL.

### Example 2 -------------------------- (Exchange Server 2010)
```
New-GlobalAddressList -Name GAL_AgencyB -RecipientFilter {((RecipientType -eq "UserMailbox") -and (CustomAttribute15 -eq "AgencyB"))}
```

This example creates the GAL\_AgencyB GAL by using the RecipientFilter parameter to include all mailbox users whose custom attribute 15 equals AgencyB.

### Example 2 -------------------------- (Exchange Server 2013)
```
New-GlobalAddressList -Name GAL_AgencyB -RecipientFilter {((RecipientType -eq "UserMailbox") -and (CustomAttribute15 -eq "AgencyB"))}
```

This example creates the GAL\_AgencyB GAL by using the RecipientFilter parameter to include all mailbox users whose custom attribute 15 equals AgencyB.

### Example 2 -------------------------- (Exchange Server 2016)
```
New-GlobalAddressList -Name GAL_AgencyB -RecipientFilter {((RecipientType -eq "UserMailbox") -and (CustomAttribute15 -eq "AgencyB"))}
```

This example creates the GAL named GAL\_AgencyB by using the RecipientFilter parameter to include all mailbox users whose custom attribute 15 equals AgencyB.

### Example 2 -------------------------- (Exchange Online)
```
New-GlobalAddressList -Name GAL_AgencyB -RecipientFilter {((RecipientType -eq "UserMailbox") -and (CustomAttribute15 -eq "AgencyB"))}
```

This example creates the GAL named GAL\_AgencyB by using the RecipientFilter parameter to include all mailbox users whose custom attribute 15 equals AgencyB.

## PARAMETERS

### -Name
!!! Exchange Server 2010, Exchange Server 2013

The Name parameter specifies the name of the new GAL.



!!! Exchange Server 2016, Exchange Online

The Name parameter specifies a unique name for the global address list. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCompany
!!! Exchange Server 2010, Exchange Server 2013

The ConditionalCompany parameter specifies the company attribute on the GAL.



!!! Exchange Server 2016, Exchange Online

The ConditionalCompany parameter specifies a filter that's based on the value of the recipient's Company property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute1
!!! Exchange Server 2010, Exchange Server 2013

The ConditionalCustomAttribute1 to ConditionalCustomAttribute15 parameters specify filters for recipients' custom attributes. For example, if you set the ConditionalCustomAttribute1 value to Marketing, all included recipients whose CustomAttribute1 value is Marketing are included in this filter. You must use the IncludedRecipients parameter if you use a Conditional parameter. You can't use this parameter if you use the RecipientFilter parameter.



!!! Exchange Server 2016, Exchange Online

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute10
!!! Exchange Server 2010, Exchange Server 2013

The ConditionalCustomAttribute1 to ConditionalCustomAttribute15 parameters specify filters for recipients' custom attributes. For example, if you set the ConditionalCustomAttribute1 value to Marketing, all included recipients whose CustomAttribute1 value is Marketing are included in this filter. You must use the IncludedRecipients parameter if you use a Conditional parameter. You can't use this parameter if you use the RecipientFilter parameter.



!!! Exchange Server 2016, Exchange Online

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute11
!!! Exchange Server 2010, Exchange Server 2013

The ConditionalCustomAttribute1 to ConditionalCustomAttribute15 parameters specify filters for recipients' custom attributes. For example, if you set the ConditionalCustomAttribute1 value to Marketing, all included recipients whose CustomAttribute1 value is Marketing are included in this filter. You must use the IncludedRecipients parameter if you use a Conditional parameter. You can't use this parameter if you use the RecipientFilter parameter.



!!! Exchange Server 2016, Exchange Online

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute12
!!! Exchange Server 2010, Exchange Server 2013

The ConditionalCustomAttribute1 to ConditionalCustomAttribute15 parameters specify filters for recipients' custom attributes. For example, if you set the ConditionalCustomAttribute1 value to Marketing, all included recipients whose CustomAttribute1 value is Marketing are included in this filter. You must use the IncludedRecipients parameter if you use a Conditional parameter. You can't use this parameter if you use the RecipientFilter parameter.



!!! Exchange Server 2016, Exchange Online

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute13
!!! Exchange Server 2010, Exchange Server 2013

The ConditionalCustomAttribute1 to ConditionalCustomAttribute15 parameters specify filters for recipients' custom attributes. For example, if you set the ConditionalCustomAttribute1 value to Marketing, all included recipients whose CustomAttribute1 value is Marketing are included in this filter. You must use the IncludedRecipients parameter if you use a Conditional parameter. You can't use this parameter if you use the RecipientFilter parameter.



!!! Exchange Server 2016, Exchange Online

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute14
!!! Exchange Server 2010, Exchange Server 2013

The ConditionalCustomAttribute1 to ConditionalCustomAttribute15 parameters specify filters for recipients' custom attributes. For example, if you set the ConditionalCustomAttribute1 value to Marketing, all included recipients whose CustomAttribute1 value is Marketing are included in this filter. You must use the IncludedRecipients parameter if you use a Conditional parameter. You can't use this parameter if you use the RecipientFilter parameter.



!!! Exchange Server 2016, Exchange Online

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute15
!!! Exchange Server 2010, Exchange Server 2013

The ConditionalCustomAttribute1 to ConditionalCustomAttribute15 parameters specify filters for recipients' custom attributes. For example, if you set the ConditionalCustomAttribute1 value to Marketing, all included recipients whose CustomAttribute1 value is Marketing are included in this filter. You must use the IncludedRecipients parameter if you use a Conditional parameter. You can't use this parameter if you use the RecipientFilter parameter.



!!! Exchange Server 2016, Exchange Online

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute2
!!! Exchange Server 2010, Exchange Server 2013

The ConditionalCustomAttribute1 to ConditionalCustomAttribute15 parameters specify filters for recipients' custom attributes. For example, if you set the ConditionalCustomAttribute1 value to Marketing, all included recipients whose CustomAttribute1 value is Marketing are included in this filter. You must use the IncludedRecipients parameter if you use a Conditional parameter. You can't use this parameter if you use the RecipientFilter parameter.



!!! Exchange Server 2016, Exchange Online

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute3
!!! Exchange Server 2010, Exchange Server 2013

The ConditionalCustomAttribute1 to ConditionalCustomAttribute15 parameters specify filters for recipients' custom attributes. For example, if you set the ConditionalCustomAttribute1 value to Marketing, all included recipients whose CustomAttribute1 value is Marketing are included in this filter. You must use the IncludedRecipients parameter if you use a Conditional parameter. You can't use this parameter if you use the RecipientFilter parameter.



!!! Exchange Server 2016, Exchange Online

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute4
!!! Exchange Server 2010, Exchange Server 2013

The ConditionalCustomAttribute1 to ConditionalCustomAttribute15 parameters specify filters for recipients' custom attributes. For example, if you set the ConditionalCustomAttribute1 value to Marketing, all included recipients whose CustomAttribute1 value is Marketing are included in this filter. You must use the IncludedRecipients parameter if you use a Conditional parameter. You can't use this parameter if you use the RecipientFilter parameter.



!!! Exchange Server 2016, Exchange Online

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute5
!!! Exchange Server 2010, Exchange Server 2013

The ConditionalCustomAttribute1 to ConditionalCustomAttribute15 parameters specify filters for recipients' custom attributes. For example, if you set the ConditionalCustomAttribute1 value to Marketing, all included recipients whose CustomAttribute1 value is Marketing are included in this filter. You must use the IncludedRecipients parameter if you use a Conditional parameter. You can't use this parameter if you use the RecipientFilter parameter.



!!! Exchange Server 2016, Exchange Online

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute6
!!! Exchange Server 2010, Exchange Server 2013

The ConditionalCustomAttribute1 to ConditionalCustomAttribute15 parameters specify filters for recipients' custom attributes. For example, if you set the ConditionalCustomAttribute1 value to Marketing, all included recipients whose CustomAttribute1 value is Marketing are included in this filter. You must use the IncludedRecipients parameter if you use a Conditional parameter. You can't use this parameter if you use the RecipientFilter parameter.



!!! Exchange Server 2016, Exchange Online

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute7
!!! Exchange Server 2010, Exchange Server 2013

The ConditionalCustomAttribute1 to ConditionalCustomAttribute15 parameters specify filters for recipients' custom attributes. For example, if you set the ConditionalCustomAttribute1 value to Marketing, all included recipients whose CustomAttribute1 value is Marketing are included in this filter. You must use the IncludedRecipients parameter if you use a Conditional parameter. You can't use this parameter if you use the RecipientFilter parameter.



!!! Exchange Server 2016, Exchange Online

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute8
!!! Exchange Server 2010, Exchange Server 2013

The ConditionalCustomAttribute1 to ConditionalCustomAttribute15 parameters specify filters for recipients' custom attributes. For example, if you set the ConditionalCustomAttribute1 value to Marketing, all included recipients whose CustomAttribute1 value is Marketing are included in this filter. You must use the IncludedRecipients parameter if you use a Conditional parameter. You can't use this parameter if you use the RecipientFilter parameter.



!!! Exchange Server 2016, Exchange Online

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalCustomAttribute9
!!! Exchange Server 2010, Exchange Server 2013

The ConditionalCustomAttribute1 to ConditionalCustomAttribute15 parameters specify filters for recipients' custom attributes. For example, if you set the ConditionalCustomAttribute1 value to Marketing, all included recipients whose CustomAttribute1 value is Marketing are included in this filter. You must use the IncludedRecipients parameter if you use a Conditional parameter. You can't use this parameter if you use the RecipientFilter parameter.



!!! Exchange Server 2016, Exchange Online

This parameter specifies a filter that's based on the value of the recipient's CustomAttribute1 to CustomAttribute15 property. For example, if you set the ConditionalCustomAttribute1 parameter to the value Marketing, all recipients whose CustomAttribute1 value is Marketing are included in this filter. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalDepartment
!!! Exchange Server 2010, Exchange Server 2013

The ConditionalDepartment parameter specifies the department attribute on the GAL.



!!! Exchange Server 2016, Exchange Online

The ConditionalDepartment parameter specifies a filter that's based on the value of the recipient's Department property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConditionalStateOrProvince
!!! Exchange Server 2010, Exchange Server 2013

The ConditionalStateOrProvince parameter specifies the attribute in the GAL for the state or province. It takes multiple values as a comma-delimited list.



!!! Exchange Server 2016, Exchange Online

The ConditionalStateOrProvince parameter specifies a filter that's based on the value of the recipient's StateOrProvince property. You can specify multiple values separated by commas.

When you use multiple values for this parameter, the OR Boolean operator is applied. For more information about how Conditional parameters work, see the Detailed Description section of this topic.

You can't use this parameter with the RecipientFilter parameter. You need to use the IncludedRecipients parameter with a Conditional parameter.



```yaml
Type: MultiValuedProperty
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
!!! Exchange Server 2010, Exchange Server 2013

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



!!! Exchange Server 2016, Exchange Online

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

### -IncludedRecipients
!!! Exchange Server 2010, Exchange Server 2013

The IncludedRecipients parameter sets the included recipients in the GAL.



!!! Exchange Server 2016, Exchange Online

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
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Organization
This parameter is available for multi-tenant deployments. It isn't available for on-premises deployments. For more information about multi-tenant deployments, see Multi-Tenant Support.

The Organization parameter specifies the organization in which you'll perform this action. This parameter doesn't accept wildcard characters, and you must use the exact name of the organization.

```yaml
Type: OrganizationIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientContainer
!!! Exchange Server 2010, Exchange Server 2013

The RecipientContainer parameter filters the recipients used to build the dynamic distribution group based on their location in Active Directory. The value of the RecipientContainer parameter can be the canonical name of an organizational unit (OU) or a domain. If a value for the RecipientContainer parameter isn't specified, the default search filter is the location of the dynamic distribution group in Active Directory.



!!! Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientFilter
!!! Exchange Server 2010

The RecipientFilter parameter specifies the recipients contained in the GAL. The RecipientFilter parameter can't be used if any of the following parameters are specified:

- IncludedRecipients

- ConditionalCompany

- ConditionalDepartment

- ConditionalStateOrProvince

For more information about the filterable properties, see Filterable Properties for the -RecipientFilter Parameter.



!!! Exchange Server 2013

The RecipientFilter parameter specifies the recipients contained in the GAL. The RecipientFilter parameter can't be used if any of the following parameters are specified:

- IncludedRecipients

- ConditionalCompany

- ConditionalDepartment

- ConditionalStateOrProvince





!!! Exchange Server 2016, Exchange Online

The RecipientFilter parameter specifies an OPath filter that's based on the value of any available recipient property. You can use any available Windows PowerShell operator, and wildcards and partial matches are supported. When you use this parameter, remember the following OPath filter rules:

- Use braces { } around the whole OPath syntax string.

- Include a hyphen before all operators.

- In cloud-based environments, you can't use a wildcard as the first character. For example, Sales\* is allowed, but \*Sales isn't allowed.

For more information, see Filterable properties for the -RecipientFilter parameter (https://technet.microsoft.com/library/bb738157.aspx).

You can't use this parameter with the IncludedRecipients parameter or any of the Conditional parameters.



```yaml
Type: String
Parameter Sets: Set2
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

[Online Version](https://technet.microsoft.com/library/9349a281-f92f-40f9-bf29-2a2e138c2783.aspx)

