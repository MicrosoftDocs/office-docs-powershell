---
external help file: Microsoft.Exchange.CalendarsAndGroups-Help.xml
applicable: Exchange Online
title: Get-EligibleDistributionGroupForMigration
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps"
---

# Get-EligibleDistributionGroupForMigration

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-EligibleDistributionGroupForMigration cmdlet to identify distribution groups that can be upgraded to Office 365 groups. You can't upgrade mail-enabled security groups to Office 365 groups.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Identity
```
Get-EligibleDistributionGroupForMigration [[-Identity] <DistributionGroupIdParameter>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-ResultSize <Unlimited>] [<CommonParameters>]
```

### ManagedBy
```
Get-EligibleDistributionGroupForMigration [-ManagedBy <GeneralRecipientIdParameter>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-ResultSize <Unlimited>] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-EligibleDistributionGroupForMigration -ResultSize unlimited
```

This example returns a summary list of all distribution groups that can be upgraded to Office 365 groups.

## PARAMETERS

### -Identity
The Identity parameter filters the results by the email address of the specified distribution group. If no results are returned for the specified email address, the group can't be upgraded to an Office 365 Group.

You can't use this parameter with the ManagedBy parameter.

```yaml
Type: DistributionGroupIdParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Online
Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ManagedBy
The ManagedBy parameter filters the results by the manager of the distribution group (the ManagedBy property). You can use any value that uniquely identifies the distribution group manager. For example:

- Name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

You can't use this parameter with the Identity parameter.

```yaml
Type: GeneralRecipientIdParameter
Parameter Sets: ManagedBy
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OrganizationalUnit
The OrganizationalUnit parameter filters the results based on the object's location in Active Directory. Only objects that exist in the specified location are returned. Valid input for this parameter is an organizational unit (OU) or domain that's visible using the Get-OrganizationalUnit cmdlet. You can use any value that uniquely identifies the OU or domain. For example:

- Name

- Canonical name

- Distinguished name (DN)

- GUID

```yaml
Type: OrganizationalUnitIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
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

## OUTPUTS

###  

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/ae182f13-dacb-471b-a5a3-9bedb58d3b44.aspx)
