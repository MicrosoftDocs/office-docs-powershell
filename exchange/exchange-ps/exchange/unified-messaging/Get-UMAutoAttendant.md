---
external help file: Microsoft.Exchange.MediaAndDevices-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
title: Get-UMAutoAttendant
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchonline-ps"
---

# Get-UMAutoAttendant

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-UMAutoAttendant cmdlet to retrieve the properties and the values for a Unified Messaging (UM) auto attendant.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-UMAutoAttendant [[-Identity] <UMAutoAttendantIdParameter>] [-DomainController <Fqdn>]
 [-UMDialPlan <UMDialPlanIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
The Get-UMAutoAttendant cmdlet retrieves the properties for a single UM auto attendant or for a list of UM auto attendants.

After this task is completed, if no parameter is supplied with the cmdlet, the cmdlet returns all UM auto attendants in the Active Directory forest. Or, if the UM dial plan ID is supplied but no name is supplied, the cmdlet returns all UM auto attendants linked to the UM dial plan.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-UMAutoAttendant | Format-List
```

This example returns a formatted list of all UM auto attendants in the Active Directory forest.

### -------------------------- Example 2 --------------------------
```
Get-UMAutoAttendant -Identity MyUMAutoAttendant
```

This example displays the properties of the UM auto attendant MyUMAutoAttendant.

### -------------------------- Example 3 --------------------------
```
Get-UMAutoAttendant -UMDialPlan MyUMDialPlan
```

This examples displays all the UM auto attendants associated with the UM dial plan MyUMDialPlan.

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
The Identity parameter specifies the identifier for the UM auto attendant that's being viewed. This is the directory object ID for the UM auto attendant.

```yaml
Type: UMAutoAttendantIdParameter
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
The UMDialPlan parameter specifies whether to display all the UM auto attendants that are associated with the UM dial plan that's specified.

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

[Online Version](https://technet.microsoft.com/library/7e577b3a-184d-4533-b1c9-c2c8884a442a.aspx)
