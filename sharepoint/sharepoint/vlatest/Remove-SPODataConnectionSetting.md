---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Remove-SPODataConnectionSetting

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

### UNNAMED_PARAMETER_SET_1
```
Remove-SPODataConnectionSetting [-Identity] <ODataConnectionSettings>
 -ServiceContext <SPServiceContextPipeBind> [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-WhatIf]
```

### UNNAMED_PARAMETER_SET_2
```
Remove-SPODataConnectionSetting -ServiceContext <SPServiceContextPipeBind> -Name <String>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

Use the Remove-SPODataConnectionSetting cmdlet to remove a Business Connectivity Services connection for a particular Business Connectivity Services service application in the farm.

The metadata object associated with the Business Connectivity Services connection is also deleted.

This cmdlet applies to an on-premises environment only.
You cannot use this command in the SharePoint Online Management Shell.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ----------------EXAMPLE 1------------ (SharePoint Server 2013)
```
C:\PS>Remove-SPODataConnectionSetting -ServiceContext "http://contoso" -Name "ContosoServiceApp"
```

This example removes the Business Connectivity Services connection named ContosoServiceApp.
Metadata properties are also removed.

### ----------------EXAMPLE 1------------ (SharePoint Server 2016)
```
C:\PS>Remove-SPODataConnectionSetting -ServiceContext "http://contoso" -Name "ContosoServiceApp"
```

This example removes the Business Connectivity Services connection named ContosoServiceApp.
Metadata properties are also removed.

### ----------------EXAMPLE 2------------ (SharePoint Server 2013)
```
C:\PS>Remove-SPODataConnectionSetting -ServiceContext "http://contoso" -Name "ContosoServiceApp-metadata"
```

This example removes the Business Connectivity Services connection metadata named ContosoServiceApp.

The associated Business Connectivity Services connection object is also removed.

### ----------------EXAMPLE 2------------ (SharePoint Server 2016)
```
C:\PS>Remove-SPODataConnectionSetting -ServiceContext "http://contoso" -Name "ContosoServiceApp-metadata"
```

This example removes the Business Connectivity Services connection metadata named ContosoServiceApp.

The associated Business Connectivity Services connection object is also removed.

### ----------------EXAMPLE 3------------ (SharePoint Server 2013)
```
C:\PS>$ConnectionVariable = Get-SPODataConnectionSettingMetadata -ServiceContext http://contoso -Name "ContosoServiceApp"

C:\PS>Remove-SPODataConnectionSetting -Identity $ConnectionVariable -ServiceContext "http://contoso"
```

This example removes the Business Connectivity Services and its associated metadata connection named ContosoServiceApp.

### ----------------EXAMPLE 3------------ (SharePoint Server 2016)
```
C:\PS>$ConnectionVariable = Get-SPODataConnectionSettingMetadata -ServiceContext http://contoso -Name "ContosoServiceApp"

C:\PS>Remove-SPODataConnectionSetting -Identity $ConnectionVariable -ServiceContext "http://contoso"
```

This example removes the Business Connectivity Services and its associated metadata connection named ContosoServiceApp.

## PARAMETERS

### -Identity
Specifies the OData Connection Settings object.

```yaml
Type: ODataConnectionSettings
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -ServiceContext
Specifies the service context which is in the form of an instance of an SPServiceContext object, an SPSiteAdministration object identifier, or a SPSite object.
An example of a service context value is an identifier from the ID field, a string identifier, a URI, or a string representation of a GUID.

```yaml
Type: SPServiceContextPipeBind
Parameter Sets: (All)
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
Specifies the name of the existing Business Connectivity Services connection.

```yaml
Type: String
Parameter Sets: UNNAMED_PARAMETER_SET_2
Aliases: 

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

Required: False
Position: Named
Default value: False
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

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-SPODataConnectionSetting]()

[New-SPODataConnectionSetting]()

[Set-SPODataConnectionSetting]()

