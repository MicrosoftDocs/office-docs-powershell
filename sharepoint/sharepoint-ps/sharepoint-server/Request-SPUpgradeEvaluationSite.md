---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Request-SPUpgradeEvaluationSite
schema: 2.0.0
---

# Request-SPUpgradeEvaluationSite

## SYNOPSIS
Requests an upgrade evaluation site for a specified site.


## SYNTAX

```
Request-SPUpgradeEvaluationSite [-Identity] <SPSitePipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-Email] [-NoUpgrade] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Use the `Request-SPUpgradeEvaluationSite` cmdlet to initiate a request to create temporary copy of a site collection at an auto-generated URL and upgrade the site collection to a newer experience.
Users can view the site to see how their site will work in the new experience.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### ----------------------EXAMPLE-----------------------
```
PS C:\>$site=Get-SPSite https://contoso.com/sites/TeamSite1
PS C:\>Request-SPUpgradeEvaluationSite $site -NoUpgrade -Email
```

This example requests an upgrade evaluation site the specified contoso.com team site.


## PARAMETERS

### -Identity
Specifies the SPSite object for the new upgrade evaluation site collection.

```yaml
Type: SPSitePipeBind
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

### -Email
Specifies not to send the requester and site collection administrators a notification email when the upgrade evaluation site is ready.
The default value is not to send an email message.

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

### -NoUpgrade
Specifies not to perform an upgrade as part of the process that creates the upgrade evaluation site.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
