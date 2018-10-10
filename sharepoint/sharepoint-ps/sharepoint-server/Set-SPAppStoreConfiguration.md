---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Set-SPAppStoreConfiguration
schema: 2.0.0
---

# Set-SPAppStoreConfiguration

## SYNOPSIS
Sets SharePoint Store settings for an app.


## SYNTAX

```
Set-SPAppStoreConfiguration [-Url <String>] [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-WhatIf] -Enable <Boolean> [<CommonParameters>]
```

## DESCRIPTION
Use the Set-SPAppStoreConfiguration cmdlet to set SharePoint Store settings for a specified app.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at Windows PowerShell for SharePoint Server 2016, SharePoint Server 2019 reference [http://go.microsoft.com/fwlink/p/?LinkId=671715](http://go.microsoft.com/fwlink/p/?LinkId=671715).


## EXAMPLES

### --------------------EXAMPLE 1---------------------
```
PS C:\>Set-SPAppStoreConfiguration -Url http://office.microsoft.com -Enable $true
```

This example sets the URL to the Office.com server.


### --------------------EXAMPLE 2---------------------
```
PS C:\>Set-SPAppStoreConfiguration -Enable $false
```

This example turns off the SharePoint Store.

### --------------------EXAMPLE 3---------------------
```
PS C:\>Set-SPAppStoreConfiguration -Enable $true
```

This example turns on the SharePoint Store.

## PARAMETERS

### -Url
Specifies the URL of the app for which to set SharePoint Store settings.

The SharePoint store value should not be changed unless instructed by a Microsoft representative.


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentCollection
Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.


```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enable
pecifies whether the Office Store services lets third- party add-ins to be found or downloaded.

This is intended for administrators to disable discovery and downloads of third-party add-ins on their SharePoint tenants and site collections.

The valid values are True and False.

The default value is False.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Get-SPAppStoreConfiguration](Get-SPAppStoreConfiguration.md)
