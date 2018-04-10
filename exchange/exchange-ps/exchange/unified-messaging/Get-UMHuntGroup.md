---
external help file: Microsoft.Exchange.MediaAndDevices-Help.xmll
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
title: Get-UMHuntGroup
schema: 2.0.0
---

# Get-UMHuntGroup

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-UMHuntGroup cmdlet to display the properties and values for an existing Unified Messaging (UM) hunt group.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-UMHuntGroup [[-Identity] <UMHuntGroupIdParameter>] [-DomainController <Fqdn>]
 [-UMDialPlan <UMDialPlanIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
The Get-UMHuntGroup cmdlet retrieves the properties for a single UM hunt group or a list of UM hunt groups. When you're using the Get-UMHuntGroup cmdlet, you can't only enter the name of the UM hunt group. You must also include the name of the UM IP gateway associated with the UM hunt group, for example, Get-UMHuntGroup -Identity MyUMIPGateway\\MyUMHuntGroup1.

After this task is completed, if the Identity parameter is specified, the properties for the UM hunt group are returned. If neither the Identity nor the UMDialPlan parameter is specified, all UM hunt groups in the Active Directory forest are returned.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-UMHuntGroup
```

This example displays all the UM hunt groups in the Active Directory forest.

### -------------------------- Example 2 --------------------------
```
Get-UMHuntGroup -Identity MyUMIPGateway\MyUMHuntGroup | Format-List
```

This example displays the details of the UM hunt group MyUMHuntGroup in a formatted list.

### -------------------------- Example 3 --------------------------
```
Get-UMHuntGroup -UMDialPlan MyUMDialPlan
```

This example displays all of the UM hunt groups associated with the UM dial plan MyUMDialPlan.

## PARAMETERS

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

### -Identity
The Identity parameter specifies the identifier for the UM hunt group being viewed. This is the directory object ID for the UM hunt group.

```yaml
Type: UMHuntGroupIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -UMDialPlan
The UMDialPlan parameter specifies the UM dial plan associated with a UM hunt group.

```yaml
Type: UMDialPlanIdParameter
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

[Online Version](https://technet.microsoft.com/library/89471543-4fae-42b0-a807-fd15bec97307.aspx)
