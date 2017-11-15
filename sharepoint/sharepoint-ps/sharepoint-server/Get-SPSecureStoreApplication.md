---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Get-SPSecureStoreApplication
schema: 2.0.0
---

# Get-SPSecureStoreApplication

## SYNOPSIS
Returns a Secure Store application.

## SYNTAX

### NameSet
```
Get-SPSecureStoreApplication -Name <String> -ServiceContext <SPServiceContextPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

### AllSet
```
Get-SPSecureStoreApplication -ServiceContext <SPServiceContextPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-All] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The Get-SPSecureStoreApplication cmdlet returns a Secure Store application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE 1------------------ 
```
C:\PS>$ssApp = Get-SPSecureStoreApplication -ServiceContext http://contoso -Name "ContosoTargetApplication"
```

This example gets the Secure Store application for the target application with the name ContosoTargetApplication.

### ------------------EXAMPLE 2------------------ 
```
C:\PS>Get-SPSecureStoreApplication -ServiceContext http://contoso -All
```

This example returns all of the Secure Store applicationshttp://contoso.

## PARAMETERS

### -Name
Specifies the name of the Secure Store application to get.

```yaml
Type: String
Parameter Sets: NameSet
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServiceContext
Specifies the service context for the local Secure Store application to connect to.

```yaml
Type: SPServiceContextPipeBind
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

### -All
{{Fill All Description}}

```yaml
Type: SwitchParameter
Parameter Sets: AllSet
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
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

