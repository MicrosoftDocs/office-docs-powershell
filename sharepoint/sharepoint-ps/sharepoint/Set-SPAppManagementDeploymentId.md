---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Set-SPAppManagementDeploymentId

## SYNOPSIS
**Below Content Applies To:**SharePoint Server 2013

Applies to:

**Below Content Applies To:**SharePoint Server 2016

Sets the identifier of the farm or tenant used by the Office Marketplace to issue App licenses.



## SYNTAX

```
Set-SPAppManagementDeploymentId -AppManagementServiceApplication <AppManagementServiceApplication>
 -DeploymentId <Guid> [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-Identity <SPSiteSubscriptionPipeBind>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Use the Set-SPAppManagementDeploymentId cmdlet to set the identifier of the farm or tenant used by the Office Marketplace to issue App Licenses.
To ensure you do not lose rights to the use of all Apps you have purchased on the Marketplace, do not change the deployment id unless directed by Microsoft documentation or support.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### -----------EXAMPLE 1---------- (SharePoint Server 2013)
```
C:\PS>$appManagementServiceApplication = Get-SPServiceApplication | where {$_.TypeName -eq "App Management Service Application"}

C:\PS>Set-SPAppManagementDeploymentId -DeploymentId 3102B7C3-1866-48EE-91CB-84E20AD24BF2 -AppManagementServiceApplication $appManagementServiceApplication
```

This example sets the deployment identifier of the current farm to 3102B7C3-1866-48EE-91CB-84E20AD24BF2.

### -----------EXAMPLE 1---------- (SharePoint Server 2016)
```
C:\PS>$appManagementServiceApplication = Get-SPServiceApplication | where {$_.TypeName -eq "App Management Service Application"}

C:\PS>Set-SPAppManagementDeploymentId -DeploymentId 3102B7C3-1866-48EE-91CB-84E20AD24BF2 -AppManagementServiceApplication $appManagementServiceApplication
```

This example sets the deployment identifier of the current farm to 3102B7C3-1866-48EE-91CB-84E20AD24BF2.

### -----------EXAMPLE 2---------- (SharePoint Server 2013)
```
C:\PS>$appManagementServiceApplication = Get-SPServiceApplication | where {$_.TypeName -eq "App Management Service Application"}

C:\PS>Get-SPSiteSubscription | where{$_.Id.Id -eq "88f16a50-0530-4f3f-b749-24ef0b30d685"} | Set-SPAppManagementDeploymentId -DeploymentId 3102B7C3-1866-48EE-91CB-84E20AD24BF2 -AppManagementServiceApplication $appManagementServiceApplication
```

This example sets the deployment identifier of the tenant with the site subscription identifier 88f16a50-0530-4f3f-b749-24ef0b30d685 to 3102B7C3-1866-48EE-91CB-84E20AD24BF2.

### -----------EXAMPLE 2---------- (SharePoint Server 2016)
```
C:\PS>$appManagementServiceApplication = Get-SPServiceApplication | where {$_.TypeName -eq "App Management Service Application"}

C:\PS>Get-SPSiteSubscription | where{$_.Id.Id -eq "88f16a50-0530-4f3f-b749-24ef0b30d685"} | Set-SPAppManagementDeploymentId -DeploymentId 3102B7C3-1866-48EE-91CB-84E20AD24BF2 -AppManagementServiceApplication $appManagementServiceApplication
```

This example sets the deployment identifier of the tenant with the site subscription identifier 88f16a50-0530-4f3f-b749-24ef0b30d685 to 3102B7C3-1866-48EE-91CB-84E20AD24BF2.

## PARAMETERS

### -AppManagementServiceApplication
Specifies the app management service application object that is running on the farm.

```yaml
Type: AppManagementServiceApplication
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeploymentId
Specifies the deployment identifier value for the tenant.
This parameter works in conjunction with the value that is defined with Identity parameter.
If Identity parameter is omitted, then it is assumed that this deployment identifier value belongs to the farm.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentCollection
Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Identifies the site subscription object representing the tenant to which the DeploymentId parameter is to be assigned.
If the Identity parameter is omitted, it is assumed that the deployment identifier belongs to the farm.

```yaml
Type: SPSiteSubscriptionPipeBind
Parameter Sets: (All)
Aliases: Subscription
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

