---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Set-SPContentDatabase
schema: 2.0.0
---

# Set-SPContentDatabase

## SYNOPSIS
Sets global properties of a SharePoint content database.


## SYNTAX

```
Set-SPContentDatabase [-Identity] <SPContentDatabasePipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-MaxSiteCount <Int32>] [-Status <SPObjectStatus>] [-WarningSiteCount <Int32>] [-WhatIf]
 [-DatabaseFailoverServer <String>] [<CommonParameters>]
```

## DESCRIPTION
The `Set-SPContentDatabase` cmdlet sets global properties of a SharePoint content database.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### ---------------EXAMPLE 1---------------
```
C:\PS>Get-SPContentDatabase http://contoso.com | Set-SPContentDatabase -MaxSiteCount 1
```

This example sets the MaxSiteCount for the content database that contains contoso.com to 1.


### ---------------EXAMPLE 2---------------
```
C:\PS>Get-SPContentDatabase -WebApplication http://sitename | Set-SPContentDatabase -WarningSiteCount $null
```

This example clears the WarningSiteCount for all databases in the sitename Web application.


## PARAMETERS

### -Identity
Specifies the content database to update.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a SharePoint content database (for example, SPContentDB1); or an instance of a valid SPContentDatabase object.

```yaml
Type: SPContentDatabasePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

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
If objects are not immediately used, or disposed of by using the `Stop-SPAssignment` command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxSiteCount
Specifies the maximum number of site collections that this database can host.

The type must be a positive integer.
Set to $null to clear this value.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Status
Specifies the status of the SQL Server database.
Set this parameter to Ready to make the database available to host new sites.
Set this parameter to Offline to make the database unavailable to host new sites.

The type must be either of the following: Ready or Offline

```yaml
Type: SPObjectStatus
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -WarningSiteCount
Specifies the number of site collections that can be created before a warning event is generated and the owner of the site collection is notified.

The type must be a positive integer.
Set to $null to clear this value.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseFailoverServer
{{Fill DatabaseFailoverServer Description}}

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016

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
