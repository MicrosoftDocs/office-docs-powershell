---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: New-SPTranslationServiceApplication
schema: 2.0.0
---

# New-SPTranslationServiceApplication

## SYNOPSIS
Provisions a new instance of the Machine Translation service.


## SYNTAX

```
New-SPTranslationServiceApplication [-Name] <String> -ApplicationPool <SPIisWebServiceApplicationPoolPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-DatabaseCredential <PSCredential>]
 [-DatabaseName <String>] [-DatabaseServer <String>] [-Default] [-FailoverDatabaseServer <String>]
 [-PartitionMode] [-WhatIf] [-DeferUpgradeActions] [<CommonParameters>]
```

## DESCRIPTION
Use the `New-SPTranslationServiceApplication` cmdlet to provision a new instance of the Machine Translation service on the farm.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### -------------EXAMPLE---------------
```
C:\PS>New-SPTranslationServiceApplication -Name TranslationService -ApplicationPool "SharePoint Web Services Default" -DatabaseServer Server1 -DatabaseName TranslationServiceDatabase
```

This example creates a Machine Translation service application named TranslationService which will run in the SharePoint Web Services Default service application pool.
The database will be called TranslationServiceDatabase and will be hosted on the Server1 SQL server instance.


## PARAMETERS

### -Name
Specifies the unique identifier of Translation Service instance to be created.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -ApplicationPool
Specifies the managed application pool that the instance of Translation Service will run in.

```yaml
Type: SPIisWebServiceApplicationPoolPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
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
Applicable: SharePoint Server 2013, SharePoint Server 2016

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
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseCredential
Specifies the SQL Server credentials used for this Translation Service instance.
This parameter to be used only used for SQL authentication; if not present, Windows authentication is used instead.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseName
Specifies the database name which is to be used for this Translation Service instance.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseServer
Specifies the database server which is to be used for this Translation Service instance.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Default
Determines whether or not the proxy for this service application should be added to the default proxy group for this Web application.

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

### -FailoverDatabaseServer
Specifies the SQL server instance that will be used as a backup to the primary SQL Server instance.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PartitionMode
Restricts this service to behave uniquely on a partitioned set of site collections.
This cannot be changed after the application is provisioned.

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
For more information, type the following command: `get-help about_commonparameters`

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

### -DeferUpgradeActions
{{Fill DeferUpgradeActions Description}}

```yaml
Type: SwitchParameter
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

[Set-SPTranslationServiceApplication](Set-SPTranslationServiceApplication.md)

[New-SPTranslationServiceApplicationProxy](New-SPTranslationServiceApplicationProxy.md)

[Set-SPTranslationServiceApplicationProxy](Set-SPTranslationServiceApplicationProxy.md)
