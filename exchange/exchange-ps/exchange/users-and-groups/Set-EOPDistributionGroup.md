---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Online Protection
title: Set-EOPDistributionGroup
schema: 2.0.0
monikerRange: "eop-ps"
---

# Set-EOPDistributionGroup

## SYNOPSIS
This cmdlet is available only in Exchange Online Protection.

Use the Set-EOPDistributionGroup cmdlet to modify the settings of distribution groups or mail-enabled security groups in Microsoft Exchange Online Protection (EOP) standalone. This cmdlet isn't available in Exchange Enterprise CAL with Services (EOP Premium). In EOP Premium, use the Set-DistributionGroup cmdlet.

Typically, EOP standalone customers that also have on-premises Active Directory organizations would use directory synchronization to create users and groups in EOP. However, if you can't use directory synchronization, then you can use cmdlets to create and manage users and groups in EOP.

This cmdlet uses a batch processing method that results in a propagation delay of a few minutes before the results of the cmdlet are visible.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-EOPDistributionGroup [-Alias <String>] [-DisplayName <String>] [-ExternalDirectoryObjectId <String>]
 [-Identity <DistributionGroupIdParameter>] [-ManagedBy <String[]>] [-PrimarySmtpAddress <SmtpAddress>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-EOPDistributionGroup -Identity "Security Team" -PrimarySmtpAddress NewSecTeamId@Contoso.com
```

This example changes the current SMTP address of the Security Team EOP distribution group to "NewSecTeamId@Contoso.com".

## PARAMETERS

### -Alias
The Alias parameter specifies the alias of the distribution group.

The value of Alias can contain letters, numbers and the characters !, #, $, %, &, ', *, +, -, /, =, ?, ^, _, `, {, |, } and ~. Periods (.) are allowed, but each period must be surrounded by other valid characters (for example, help.desk). Unicode characters from U+00A1 to U+00FF are also allowed. The maximum length of the Alias value is 64 characters.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayName
The DisplayName parameter specifies the name of the distribution group in the Exchange admin center (EAC).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalDirectoryObjectId
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the distribution group or mail-enabled security group that you want to modify. You can use any value that uniquely identifies the group.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

```yaml
Type: DistributionGroupIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagedBy
The ManagedBy parameter specifies one or more group owners. A group must have at least one owner. You can use any value that uniquely identifies the owner.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Domain\Account

- Email address

- GUID

- LegacyExchangeDN

- SamAccountName

- User ID or user principal name (UPN)

You can specify multiple owners by using the following syntax: @("\<user1\>","\<user2\>"...). The values that you specify will overwrite the current list of owners.

The users specified with the ManagedBy parameter aren't automatically members of the distribution group. If you want any of the owners to be added as members of the distribution group, you need to add them by using the Update-EOPDistributionGroupMember cmdlet.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrimarySmtpAddress
The PrimarySmtpAddress parameter specifies the primary return SMTP email address for the distribution group.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online Protection
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

[Online Version](https://technet.microsoft.com/library/689a66c5-a524-4870-88f3-091fd6eae3b7.aspx)
