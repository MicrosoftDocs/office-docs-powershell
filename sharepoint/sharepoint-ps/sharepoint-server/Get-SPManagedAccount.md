---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Get-SPManagedAccount
schema: 2.0.0
---

# Get-SPManagedAccount

## SYNOPSIS

Retrieves accounts registered in the configuration database.



## SYNTAX

### Server
```
Get-SPManagedAccount [[-Identity] <SPManagedAccountPipeBind>] [-AssignmentCollection <SPAssignmentCollection>]
 [-Server <SPServerPipeBind>] [<CommonParameters>]
```

### Service
```
Get-SPManagedAccount [[-Identity] <SPManagedAccountPipeBind>] [-AssignmentCollection <SPAssignmentCollection>]
 [-Service <SPServicePipeBind>] [<CommonParameters>]
```

### WebApplication
```
Get-SPManagedAccount [[-Identity] <SPManagedAccountPipeBind>] [-AssignmentCollection <SPAssignmentCollection>]
 [-WebApplication <SPWebApplicationPipeBind>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The Get-SPManagedAccount cmdlet returns the managed accounts that match the given scope.
The scope can be any one of the following values: Web application, service, or server.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------EXAMPLE----------------- 
```
C:\PS>Get-SPManagedAccount
```

This example displays all the managed accounts in the farm.

## PARAMETERS

### -Identity
Specifies the full name or partial name of the managed accounts to retrieve.

The type must be a valid account name, in the form Domain\User, or a GUID, in the form 1234-3456-09876.

```yaml
Type: SPManagedAccountPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
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

### -Server
Specifies the scope to a server.

```yaml
Type: SPServerPipeBind
Parameter Sets: Server
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Service
Specifies the scope to a service.

```yaml
Type: SPServicePipeBind
Parameter Sets: Service
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -WebApplication
Specifies the scope to a Web application.

```yaml
Type: SPWebApplicationPipeBind
Parameter Sets: WebApplication
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

