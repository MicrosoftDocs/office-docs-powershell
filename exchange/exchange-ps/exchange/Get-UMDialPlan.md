---
external help file: Microsoft.Exchange.MediaAndDevices-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-umdialplan
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
title: Get-UMDialPlan
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-UMDialPlan

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-UMDialPlan cmdlet to display the properties of a single Unified Messaging (UM) dial plan or to return a list of all UM dial plans associated with Mailbox servers running the Microsoft Exchange Unified Messaging service.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-UMDialPlan [[-Identity] <UMDialPlanIdParameter>]
 [-DomainController <Fqdn>]
 [<CommonParameters>]
```

## DESCRIPTION
The Get-UMDialPlan cmdlet displays all properties for a UM dial plan.

After this task is completed, when you specify the Identity parameter, you can view the values set. When the Get-UMDialPlan cmdlet is run, if no parameter is supplied, the cmdlet returns all UM dial plans in the Active Directory forest.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-UMDialPlan
```

This example displays a list of all the UM dial plans in the Active Directory forest.

### Example 2
```powershell
Get-UMDialPlan -Identity MyUMDialPlan | Format-List
```

This example displays a formatted list of properties for the UM dial plan MyUMDialPlan.

## PARAMETERS

### -Identity
The Identity parameter specifies the UM dial plan ID.

```yaml
Type: UMDialPlanIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -DomainController
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
