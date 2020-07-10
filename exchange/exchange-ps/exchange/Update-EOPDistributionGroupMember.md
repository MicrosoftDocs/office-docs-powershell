---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/update-eopdistributiongroupmember
applicable: Exchange Online Protection
title: Update-EOPDistributionGroupMember
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "eop-ps"
---

# Update-EOPDistributionGroupMember

## SYNOPSIS
This cmdlet is available only in Exchange Online Protection.

Use the Update-EOPDistributionGroupMember cmdlet to add or remove members from distribution groups and mail-enabled security groups in standalone Exchange Online Protection (EOP) organizations without Exchange Online mailboxes. This cmdlet isn't available in EOP that's included with Exchange Enterprise CAL with Services licenses in on-premises Exchange; use the Update-DistributionGroupMember cmdlet instead.

Typically, standalone EOP organizations that also have on-premises Active Directory use directory synchronization to create users and groups in EOP. However, if you can't use directory synchronization, then you can use cmdlets to create and manage users and groups in EOP.

This cmdlet uses a batch processing method that results in a propagation delay of a few minutes before the results of the cmdlet are visible.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Update-EOPDistributionGroupMember [-Identity <DistributionGroupIdParameter>]
 [-ExternalDirectoryObjectId <String>]
 [-Members <String[]>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Update-EOPDistributionGroupMember -Identity "Security Team" -Members @("Kitty Petersen","Tyson Fawcett")
```

This example replaces the current members of the Security Team distribution group with Kitty Petersen and Tyson Fawcett.

### Example 2
```powershell
$CurrentMemberObjects = Get-DistributionGroupMember "Security Team"
$CurrentMemberNames = $CurrentMemberObjects | % {$_.name}
$CurrentMemberNames += "Tyson Fawcett"
Update-EOPDistributionGroupMember -Identity "Security Team" -Members $CurrentMemberNames
```

This example adds a new user named Tyson Fawcett to the distribution group named Security Team while preserving the current members of the group. The current member objects are retrieved in a collection, the collection is filtered to extract the names, the user "Tyson Fawcett" is added, and the updated name list replaces the current membership of the distribution group.

## PARAMETERS

### -Identity
The Identity parameter specifies the distribution group or mail-enabled security group that you want to update. You can use any value that uniquely identifies the group. For example:

- Name

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

### -Members
The Members parameter specifies the list of recipients (mail-enabled objects) in the distribution group or mail-enabled security group. In Exchange Online Protection, the valid recipient types are:

- Mail users

- Distribution groups

- Mail-enabled security groups

You can use any value that uniquely identifies the recipient. For example:

- Name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

To replace the current members of the group with the recipients that you specify, use the syntax @("\<recipient1\>","\<recipient2\>"...). To add new group members without affecting the existing members, see Example 2 in the Examples section.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS
