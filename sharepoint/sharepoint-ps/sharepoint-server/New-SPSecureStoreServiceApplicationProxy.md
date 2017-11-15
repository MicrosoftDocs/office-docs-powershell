---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: New-SPSecureStoreServiceApplicationProxy
schema: 2.0.0
---

# New-SPSecureStoreServiceApplicationProxy

## SYNOPSIS
Creates a new Secure Store Service application proxy in the farm.


## SYNTAX

### PipeBind
```
New-SPSecureStoreServiceApplicationProxy -ServiceApplication <SPServiceApplicationPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-DefaultProxyGroup] [-Name <String>] [-WhatIf]
 [<CommonParameters>]
```

### Uri
```
New-SPSecureStoreServiceApplicationProxy -Uri <Uri> [-AssignmentCollection <SPAssignmentCollection>] [-Confirm]
 [-DefaultProxyGroup] [-Name <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The `New-SPSecureStoreServiceApplicationProxy` cmdlet creates a new Secure Store Service application proxy for a Secure Store Service application in the farm.

The `New-SPSecureStoreServiceApplicationProxy` cmdlet does not specify whether the service application proxy is partitioned or not.
If you want to specify a partitioned service application proxy, a partitioned service application can be created by using the `New-SPSecureStoreServiceApplication` cmdlet.
The result of the `New-SPSecureStoreServiceApplication` cmdlet can be passed to the `New-SPSecureStoreServiceApplicationProxy` cmdlet.
Similarly, if you want to specify an unpartitioned service application proxy, an unpartitioned service application can be created by using the `New-SPSecureStoreServiceApplication` cmdlet.
The result of the `New-SPSecureStoreServiceApplication` cmdlet can be passed to the `New-SPSecureStoreServiceApplicationProxy` cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### ------------------EXAMPLE 1------------------
```
C:\PS>New-SPSecureStoreServiceApplicationProxy -Name "Contoso Service Application Proxy" -ServiceApplication $SSServiceApp
```

This example creates a new Secure Store Service application proxy with the name Contoso Service Application Proxy for the given service application.


### ------------------EXAMPLE 2------------------
```
C:\PS>$nameofproxy = "Connection to: HostedSecureStoreInParentFarm"

C:\PS>$proxy = Get-SPServiceApplicationProxy | where {$_ -match $nameofproxy}

C:\PS>$prop = $proxy.Properties

C:\PS>$type = $prop["Microsoft.Office.Server.Utilities.SPPartitionOptions"].GetType()

C:\PS>$partition = [enum]::Parse( $type, 1 )

C:\PS>$prop["Microsoft.Office.Server.Utilities.SPPartitionOptions"] = $partition

C:\PS>$proxy.Update()
```

This example converts an unpartitioned secure store service application proxy in the child to a partitioned one.


## PARAMETERS

### -ServiceApplication
Specifies the local Secure Store Service application associated with the new proxy.

```yaml
Type: SPServiceApplicationPipeBind
Parameter Sets: PipeBind
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Uri
Specifies the URI of a remote Secure Store Service application associated with the new proxy.

The type must be a valid URI, in the form file:\\\\server_name\sitedocs.

```yaml
Type: Uri
Parameter Sets: Uri
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

### -DefaultProxyGroup
Specifies that the service application proxy be added to the farm's default proxy group.

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

### -Name
Specifies the name of the new service application proxy to create.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
