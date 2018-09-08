---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
title: Set-ManagementScope
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchonline-ps || eop-ps"
---

# Set-ManagementScope

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-ManagementScope cmdlet to change an existing management scope.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set3
```
Set-ManagementScope [-Identity] <ManagementScopeIdParameter> -DatabaseRestrictionFilter <String> [-Confirm]
 [-DomainController <Fqdn>] [-Force] [-Name <String>] [-WhatIf] [<CommonParameters>]
```

### Set2
```
Set-ManagementScope [-Identity] <ManagementScopeIdParameter> -ServerRestrictionFilter <String> [-Confirm]
 [-DomainController <Fqdn>] [-Force] [-Name <String>] [-WhatIf] [<CommonParameters>]
```

### Set1
```
Set-ManagementScope [-Identity] <ManagementScopeIdParameter> [-Confirm] [-DomainController <Fqdn>] [-Force]
 [-Name <String>] [-RecipientRestrictionFilter <String>] [-RecipientRoot <OrganizationalUnitIdParameter>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
If you change a scope that has been associated with management role assignments using the New-ManagementRoleAssignment cmdlet, the updated scope applies to all the associated role assignments. For more information about changing scopes, see Change a role scope (https://technet.microsoft.com/library/dd298145.aspx).

For more information about regular and exclusive scopes, see Understanding management role scopes (https://technet.microsoft.com/library/dd335146.aspx).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-ManagementScope "Seattle Mailboxes" -RecipientRestrictionFilter { City -Eq "Seattle" -And RecipientType -Eq "UserMailbox" }
```

This example changes the recipient restriction filter on the Seattle Mailboxes management scope to match all mailboxes that have Seattle in the City mailbox property.

### -------------------------- Example 2 --------------------------
```
Set-ManagementScope "Sales Recipients" -RecipientRoot contoso.com/Sales
```

This example changes the recipient root for the Sales Recipients management scope to match only recipient objects contained under the contoso.com/Sales OU.

### -------------------------- Example 3 --------------------------
```
Set-ManagementScope "Vancouver Servers" -ServerRestrictionFilter {ServerSite -Eq "NA-CDN-Vancouver,CN=Sites,CN=Configuration,DC=contoso,DC=com"}
```

This example changes the Active Directory site used in the server restriction filter for the Vancouver Servers management scope to "NA-CDN-Vancouver,CN=Sites,CN=Configuration,DC=contoso,DC=com".

## PARAMETERS

### -DatabaseRestrictionFilter
This parameter is available only in on-premises Exchange.

The DatabaseRestrictionFilter parameter specifies the filter to apply to database objects. When the DatabaseRestrictionFilter parameter is specified, only database objects that match the filter are included in the scope. If you use the DatabaseRestrictionFilter parameter, you can't use the ServerRestrictionFilter, RecipientRestrictionFilter or RecipientRoot parameters. For a list of filterable database properties, see Understanding management role scopes (https://technet.microsoft.com/library/dd335146.aspx).

```yaml
Type: String
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the name of the management scope to modify. If the name contains spaces, enclose it in quotation marks (").

```yaml
Type: ManagementScopeIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ServerRestrictionFilter
This parameter is available only in on-premises Exchange.

The ServerRestrictionFilter parameter specifies the filter to apply to server objects. When the ServerRestrictionFilter parameter is specified, only recipient objects that match the filter are included in the scope. If you use the ServerRestrictionFilter parameter, you can't use the DatabaseRestrictionFilter, RecipientRestrictionFilter, or RecipientRoot parameters. For a list of filterable server properties, see Understanding management role scopes (https://technet.microsoft.com/library/dd335146.aspx).

```yaml
Type: String
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New and Set cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
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

### -Force
The Force switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the name of the management scope. The management scope name can be a maximum of 64 characters. If the name contains spaces, enclose it in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientRestrictionFilter
The RecipientRestrictionFilter parameter specifies the filter to apply to recipient objects. When the RecipientRestrictionFilter parameter is specified, only server objects that match the filter are included in the scope. If you use the RecipientRestrictionFilter parameter, you can't use the DatabaseRestrictionFilter or ServerRestrictionFilter parameters.

```yaml
Type: String
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientRoot
The RecipientRoot parameter specifies the organizational unit (OU) under which the filter specified with the RecipientRestrictionFilter parameter should be applied. If you use the RecipientRoot parameter, you can't use the ServerRestrictionFilter or DatabaseRestrictionFilter parameters.

```yaml
Type: OrganizationalUnitIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
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

[Online Version](https://technet.microsoft.com/library/568aa7c5-4b59-4e10-9139-782d49cd0969.aspx)
