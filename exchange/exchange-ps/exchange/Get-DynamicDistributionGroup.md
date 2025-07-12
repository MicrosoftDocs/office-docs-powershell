---
external help file: Microsoft.Exchange.CalendarsAndGroups-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-dynamicdistributiongroup
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection
title: Get-DynamicDistributionGroup
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Get-DynamicDistributionGroup

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-DynamicDistributionGroup cmdlet to view existing dynamic distribution groups.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### AnrSet
```
Get-DynamicDistributionGroup [-Anr <String>]
 [-Credential <PSCredential>]
 [-DomainController <Fqdn>]
 [-Filter <String>]
 [-IgnoreDefaultScope]
 [-IncludeAcceptMessagesOnlyFromDLMembersWithDisplayNames]
 [-IncludeAcceptMessagesOnlyFromSendersOrMembersWithDisplayNames]
 [-IncludeAcceptMessagesOnlyFromWithDisplayNames]
 [-IncludeBypassModerationFromSendersOrMembersWithDisplayNames]
 [-IncludeManagedByWithDisplayNames]
 [-IncludeGrantSendOnBehalfToWithDisplayNames]
 [-IncludeModeratedByWithDisplayNames]
 [-IncludeSystemObjects]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-ReadFromDomainController]
 [-ResultSize <Unlimited>]
 [-SortBy <String>]
 [<CommonParameters>]
```

### Identity
```
Get-DynamicDistributionGroup [[-Identity] <DynamicGroupIdParameter>]
 [-Credential <PSCredential>]
 [-DomainController <Fqdn>]
 [-Filter <String>]
 [-IgnoreDefaultScope]
 [-IncludeAcceptMessagesOnlyFromDLMembersWithDisplayNames]
 [-IncludeAcceptMessagesOnlyFromSendersOrMembersWithDisplayNames]
 [-IncludeAcceptMessagesOnlyFromWithDisplayNames]
 [-IncludeBypassModerationFromSendersOrMembersWithDisplayNames]
 [-IncludeGrantSendOnBehalfToWithDisplayNames]
 [-IncludeManagedByWithDisplayNames]
 [-IncludeModeratedByWithDisplayNames]
 [-IncludeSystemObjects]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-ReadFromDomainController]
 [-ResultSize <Unlimited>]
 [-SortBy <String>]
 [<CommonParameters>]
```

### ManagedBySet
```
Get-DynamicDistributionGroup [-ManagedBy <GeneralRecipientIdParameter>]
 [-Credential <PSCredential>]
 [-DomainController <Fqdn>]
 [-Filter <String>]
 [-IgnoreDefaultScope]
 [-IncludeAcceptMessagesOnlyFromDLMembersWithDisplayNames]
 [-IncludeAcceptMessagesOnlyFromSendersOrMembersWithDisplayNames]
 [-IncludeAcceptMessagesOnlyFromWithDisplayNames]
 [-IncludeBypassModerationFromSendersOrMembersWithDisplayNames]
 [-IncludeGrantSendOnBehalfToWithDisplayNames]
 [-IncludeManagedByWithDisplayNames]
 [-IncludeModeratedByWithDisplayNames]
 [-IncludeSystemObjects]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-ReadFromDomainController]
 [-ResultSize <Unlimited>]
 [-SortBy <String>]
 [<CommonParameters>]
```

## DESCRIPTION
A dynamic distribution group queries mail-enabled objects and builds the group membership based on the results. The group membership is recalculated whenever an email message is sent to the group.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-DynamicDistributionGroup
```

This example returns a summary list of all dynamic distribution groups in your organization.

### Example 2
```powershell
Get-DynamicDistributionGroup -Identity "Marketing Department" | Format-List
```

This example returns detailed information about the dynamic distribution group named Marketing Department.

### Example 3
```powershell
Get-DynamicDistributionGroup -Anr *research* | Format-Table Name, ManagedBy -Auto
```

This example returns all dynamic distribution groups whose names contain the string "research" and shows the group owners.

### Example 4
```powershell
$FTE = Get-DynamicDistributionGroup "Full Time Employees"

Get-Recipient -RecipientPreviewFilter $FTE.RecipientFilter -OrganizationalUnit $FTE.RecipientContainer
```

This example returns the members for the dynamic distribution group named Full Time Employees. The first command stores the dynamic distribution group object in the variable $FTE. The second command uses the Get-Recipient cmdlet to list the recipients that match the criteria defined for the dynamic distribution group.

## PARAMETERS

### -Identity
The Identity parameter specifies the dynamic distribution group that you want to view. You can use any value that uniquely identifies the dynamic distribution group. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

```yaml
Type: DynamicGroupIdParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Anr
The Anr parameter specifies a string on which to perform an ambiguous name resolution (ANR) search. You can specify a partial string and search for objects with an attribute that matches that string. The default attributes searched are:

- CommonName (CN)
- DisplayName
- FirstName
- LastName
- Alias

```yaml
Type: String
Parameter Sets: AnrSet
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Credential
The Credential parameter specifies the username and password that's used to run this command. Typically, you use this parameter in scripts or when you need to provide different credentials that have the required permissions.

A value for this parameter requires the Get-Credential cmdlet. To pause this command and receive a prompt for credentials, use the value `(Get-Credential)`. Or, before you run this command, store the credentials in a variable (for example, `$cred = Get-Credential`) and then use the variable name (`$cred`) for this parameter. For more information, see [Get-Credential](https://learn.microsoft.com/powershell/module/microsoft.powershell.security/get-credential).

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

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

### -Filter
The Filter parameter uses OPATH syntax to filter the results by the specified properties and values. The search criteria uses the syntax `"Property -ComparisonOperator 'Value'"`.

- Enclose the whole OPATH filter in double quotation marks " ". If the filter contains system values (for example, `$true`, `$false`, or `$null`), use single quotation marks ' ' instead. Although this parameter is a string (not a system block), you can also use braces { }, but only if the filter doesn't contain variables.
- Property is a filterable property. For more information about the filterable properties, see [Filterable properties for the Filter parameter](https://learn.microsoft.com/powershell/exchange/filter-properties).
- ComparisonOperator is an OPATH comparison operator (for example `-eq` for equals and `-like` for string comparison). For more information about comparison operators, see [about_Comparison_Operators](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_comparison_operators).
- Value is the property value to search for. Enclose text values and variables in single quotation marks (`'Value'` or `'$Variable'`). If a variable value contains single quotation marks, you need to identify (escape) the single quotation marks to expand the variable correctly. For example, instead of `'$User'`, use `'$($User -Replace "'","''")'`. Don't enclose integers or system values in quotation marks (for example, use `500`, `$true`, `$false`, or `$null` instead).

You can chain multiple search criteria together using the logical operators `-and` and `-or`. For example, `"Criteria1 -and Criteria2"` or `"(Criteria1 -and Criteria2) -or Criteria3"`.

For detailed information about OPATH filters in Exchange, see [Additional OPATH syntax information](https://learn.microsoft.com/powershell/exchange/recipient-filters#additional-opath-syntax-information).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IgnoreDefaultScope
This parameter is available only in on-premises Exchange.

The IgnoreDefaultScope switch tells the command to ignore the default recipient scope setting for the Exchange PowerShell session, and to use the entire forest as the scope. You don't need to specify a value with this switch.

This switch enables the command to access Active Directory objects that aren't currently available in the default scope, but also introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.
- You can only use the DN for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeAcceptMessagesOnlyFromDLMembersWithDisplayNames
This parameter is available only in the cloud-based service.

The IncludeAcceptMessagesOnlyFromDLMembersWithDisplayNames switch specifies whether to return the SMTP addresses and display names of AcceptMessagesOnlyFromDLMembers recipients in the AcceptMessagesOnlyFromDLMembersWithDisplayNames property. You don't need to specify a value with this switch.

This switch was introduced to restore human-readable identifiers in the results of the cmdlet. If you don't use this switch, AcceptMessagesOnlyFromDLMembers recipients are shown as GUIDs and the AcceptMessagesOnlyFromDLMembersWithDisplayNames property is empty.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeAcceptMessagesOnlyFromSendersOrMembersWithDisplayNames
This parameter is available only in the cloud-based service.

The IncludeAcceptMessagesOnlyFromSendersOrMembersWithDisplayNames switch specifies whether to return the SMTP addresses and display names of AcceptMessagesOnlyFromSendersOrMembers recipients in the AcceptMessagesOnlyFromSendersOrMembersWithDisplayNames property. You don't need to specify a value with this switch.

This switch was introduced to restore human-readable identifiers in the results of the cmdlet. If you don't use this switch, AcceptMessagesOnlyFromSendersOrMembers recipients are shown as GUIDs and the AcceptMessagesOnlyFromSendersOrMembersWithDisplayNames property is empty.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeAcceptMessagesOnlyFromWithDisplayNames
This parameter is available only in the cloud-based service.

The IncludeAcceptMessagesOnlyFromWithDisplayNames switch specifies whether to return the SMTP addresses and display names of AcceptMessagesOnlyFrom recipients in the AcceptMessagesOnlyFromWithDisplayNames property. You don't need to specify a value with this switch.

This switch was introduced to restore human-readable identifiers in the results of the cmdlet. If you don't use this switch, AcceptMessagesOnlyFrom recipients are shown as GUIDs and the AcceptMessagesOnlyFromWithDisplayNames property is empty.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeBypassModerationFromSendersOrMembersWithDisplayNames
This parameter is available only in the cloud-based service.

The IncludeBypassModerationFromSendersOrMembersWithDisplayNames switch specifies whether to return the SMTP addresses and display names of BypassModerationFromSendersOrMembers recipients in the BypassModerationFromSendersOrMembersWithDisplayNames property. You don't need to specify a value with this switch.

This switch was introduced to restore human-readable identifiers in the results of the cmdlet. If you don't use this switch, BypassModerationFromSendersOrMembers recipients are shown as GUIDs and the BypassModerationFromSendersOrMembersWithDisplayNames property is empty.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeGrantSendOnBehalfToWithDisplayNames
This parameter is available only in the cloud-based service.

The IncludeGrantSendOnBehalfToWithDisplayNames switch specifies whether to return the SMTP addresses and display names of GrantSendOnBehalfTo recipients in the GrantSendOnBehalfToWithDisplayNames property. You don't need to specify a value with this switch.

This switch was introduced to restore human-readable identifiers in the results of the cmdlet. If you don't use this switch, GrantSendOnBehalfTo recipients are shown as GUIDs and the GrantSendOnBehalfToWithDisplayNames property is empty.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeManagedByWithDisplayNames
This parameter is available only in the cloud-based service.

The IncludeManagedByWithDisplayNames switch specifies whether to return the SMTP addresses and display names of group owners in the ManagedByWithDisplayNames property. You don't need to specify a value with this switch.

This switch was introduced to restore human-readable identifiers in the results of the cmdlet. If you don't use this switch, the ManagedByWithDisplayNames property is empty.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeModeratedByWithDisplayNames
This parameter is available only in the cloud-based service.

The IncludeModeratedByWithDisplayNames switch specifies whether to return the SMTP addresses and display names of ModeratedBy recipients in the ModeratedByWithDisplayNames property. You don't need to specify a value with this switch.

This switch was introduced to restore human-readable identifiers in the results of the cmdlet. If you don't use this switch, ModeratedBy recipients are shown as GUIDs and the ModeratedByWithDisplayNames property is empty.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeSystemObjects
This parameter is available only in on-premises Exchange.

This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagedBy
The ManagedBy parameter filters the results by the owner of the group. You can use any value that uniquely identifies the owner. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

```yaml
Type: GeneralRecipientIdParameter
Parameter Sets: ManagedBySet
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OrganizationalUnit
The OrganizationalUnit parameter filters the results based on the object's location in Active Directory. Only objects that exist in the specified location are returned. Valid input for this parameter is an organizational unit (OU) or domain that's returned by the Get-OrganizationalUnit cmdlet. You can use any value that uniquely identifies the OU or domain. For example:

- Name
- Canonical name
- Distinguished name (DN)
- GUID

```yaml
Type: OrganizationalUnitIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReadFromDomainController
This parameter is available only in on-premises Exchange.

The ReadFromDomainController switch specifies that information should be read from a domain controller in the user's domain. You don't need to specify a value with this switch.

The command: `Set-AdServerSettings -ViewEntireForest $true` to include all objects in the forest requires the ReadFromDomainController switch. Otherwise, the command might use a global catalog that contains outdated information. Also, you might need to run multiple iterations of the command with the ReadFromDomainController switch to get the information.

By default, the recipient scope is set to the domain that hosts your Exchange servers.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SortBy
The SortBy parameter specifies the property to sort the results by. You can sort by only one property at a time. The results are sorted in ascending order.

If the default view doesn't include the property you're sorting by, you can append the command with ` | Format-Table -Auto Property1,Property2,...PropertyX`. to create a new view that contains all of the properties that you want to see. Wildcards (\*) in the property names are supported.

You can sort by the following properties:

- Name
- DisplayName
- Alias

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online, Exchange Online Protection

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
