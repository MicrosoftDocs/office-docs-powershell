---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Set-SPEnterpriseSearchPrimaryHostController

## SYNOPSIS
Sets the primary search host controller for the farm.

## SYNTAX

```
Set-SPEnterpriseSearchPrimaryHostController [-SearchServiceInstance] <SearchServiceInstancePipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-Force] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:**SharePoint Server 2013

This cmdlet sets the primary SearchHostController for the farm to the defined SearchHostController.

The SearchHostController is related to the SearchServiceInstance, where the SearchHostController manages the search components that run on a server, and maintains a local repository for linguistic dictionaries.
The search components retrieve the linguistic dictionaries from the PrimaryHostController.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

**Below Content Applies To:**SharePoint Server 2016

This cmdlet sets the primary SearchHostController for the farm to the defined SearchHostController.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).



## EXAMPLES

### ------------------EXAMPLE 1------------------ (SharePoint Server 2013)
```
$ssi = Get-SPEnterpriseSearchServiceInstance -Local 
Set-SPEnterpriseSearchPrimaryHostController $ssi
```

This example sets the local SearchHostController instance as the new primary SearchHostController.
It is up to the user to select the HostController with latest version available.
If you choose a SearchHostController that is not running the latest version of the repository, you will have to confirm before you continue.

### ------------------EXAMPLE 1------------------ (SharePoint Server 2016)
```
C:\PS>$ssi = Get-SPEnterpriseSearchServiceInstance -Local 
Set-SPEnterpriseSearchPrimaryHostController $ssi
```

This example sets the local SearchHostController instance as the new primary SearchHostController.
It is up to the user to select the HostController with latest version available.
If you choose a SearchHostController that is not running the latest version of the repository, you will have to confirm before you continue.

### ------------------EXAMPLE 2------------------ (SharePoint Server 2013)
```
$ssi = Get-SPEnterpriseSearchServiceInstance -Local 
Set-SPEnterpriseSearchPrimaryHostController $ssi -Force
```

This example sets the local SearchHostController instance as the new primary SearchHostController.
If you choose a SearchHostController that is not running the latest version of the repository, you will not get a confirmation message before you continue.

### ------------------EXAMPLE 2------------------ (SharePoint Server 2016)
```
C:\PS>$ssi = Get-SPEnterpriseSearchServiceInstance -Local 
Set-SPEnterpriseSearchPrimaryHostController $ssi -Force
```

This example sets the local SearchHostController instance as the new primary SearchHostController.
If you choose a SearchHostController that is not running the latest version of the repository, you will not get a confirmation message before you continue.

## PARAMETERS

### -SearchServiceInstance
SearchServiceInstance of the server from where the SearchHostController object is returned.

```yaml
Type: SearchServiceInstancePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
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

### -Force
Force the change of the primary SearcHostController.
No confirmation messages are asked, even if user tries to set primary to a SearchHostController not running the latest version of the repository.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
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

[Online Version](http://technet.microsoft.com/EN-US/library/05f14b40-f1dd-4b6f-a015-f764587d38f5(Office.15).aspx)

