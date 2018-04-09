---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Online Protection
title: Set-EOPGroup
schema: 2.0.0
monikerRange: "eop-ps"
---

# Set-EOPGroup

## SYNOPSIS
This cmdlet is available only in Exchange Online Protection.

Use the Set-EOPGroup cmdlet to modify general group object attributes in Microsoft Exchange Online Protection (EOP) standalone. This cmdlet isn't available in Exchange Enterprise CAL with Services (EOP Premium). In EOP Premium, use the Set-Group cmdlet.

Typically, EOP standalone customers that also have on-premises Active Directory organizations would use directory synchronization to create users and groups in EOP. However, if you can't use directory synchronization, then you can use cmdlets to create and manage users and groups in EOP.

This cmdlet uses a batch processing method that results in a propagation delay of a few minutes before the results of the cmdlet are visible.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-EOPGroup [-ExternalDirectoryObjectId <String>] [-Identity <GroupIdParameter>] [-ManagedBy <String[]>]
 [-Notes <String>] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-Group -Identity "Legal Department" -Notes "Group members updated June 1, 2014"
```

This example sets the Notes property to indicate the last time that the group was updated.

## PARAMETERS

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
Type: GroupIdParameter
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
The ManagedBy parameter specifies a user who owns the group. You can use any value that uniquely identifies the user.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

You can specify multiple owners by using the following syntax: @("\<user1\>","\<user2\>"...). The values that you specify will overwrite the current list of owners.

The users you specify with this parameter aren't automatically added to the group. To add members to the group, use the Update-EOPDistributionGroupMember cmdlet.

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

### -Notes
The Notes parameters specifies additional information about the object. If the value contains spaces, enclose the value in quotation marks (").

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

[Online Version](https://technet.microsoft.com/library/bed90147-4ff9-4b9d-b9fc-3e7843397818.aspx)
