---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Enable-SPAppAutoProvision
schema: 2.0.0
---

# Enable-SPAppAutoProvision

## SYNOPSIS

Enables automatic provisioning of an app.

## SYNTAX

```
Enable-SPAppAutoProvision [-AssignmentCollection <SPAssignmentCollection>]
 [-SiteSubscription <SPSiteSubscriptionPipeBind>] [<CommonParameters>]
```

## DESCRIPTION
Use the Enable-SPAppAutoProvision cmdlet to enable automatic provisioning of an app to the farm.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------EXAMPLE 1-------- 
```
C:\PS>Enable-SPAppAutoProvision
```

This example enables auto provisioning for the farm.
The app auto provisioning is enabled by default.
This setting overrides site subscription level setting.

### --------------EXAMPLE 2-------- 
```
C:\PS>$subscription = Get-SPSiteSubscription http://Contoso.com
C:\PS>Enable-SPAppAutoProvision -SiteSubscription $subscription
```

This example enables app auto provisioning for the site subscription for Contoso.Com site.
The app auto provisioning is enabled by default.

## PARAMETERS

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

### -SiteSubscription
Specifies the site collection for which auto provisioning is to be enabled.

```yaml
Type: SPSiteSubscriptionPipeBind
Parameter Sets: (All)
Aliases: 
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

[Disable-SPAppAutoProvision](Disable-SPAppAutoProvision.md)

[Get-SPAppAutoProvisionConnection](Get-SPAppAutoProvisionConnection.md)

[Set-SPAppAutoProvisionConnection](Set-SPAppAutoProvisionConnection.md)

