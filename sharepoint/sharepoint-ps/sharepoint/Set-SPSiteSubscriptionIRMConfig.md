---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Set-SPSiteSubscriptionIRMConfig

## SYNOPSIS
Sets the Information Rights Management (IRM) settings.


## SYNTAX

```
Set-SPSiteSubscriptionIRMConfig [-Identity] <SPSiteSubscriptionPipeBind> [-IrmEnabled]
 [-AssignmentCollection <SPAssignmentCollection>] [-CertificateServerUrl <Uri>] [-Confirm] [-PassThru]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Use the Identity parameter of the `Set-SPSiteSubscriptionIRMConfig` cmdlet to set the IRM setting for a specified tenant.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### --------------------EXAMPLE 1---------------------
```
C:\PS>site = Get-SPSite  HYPERLINK "http://<myspserver>" http:// <myspserver>

C:\PS>$subscription = $site.SiteSubscription

C:\PS>Set-SPSiteSubscriptionIRMConfig -Identity $subscription -IrmEnabled -CertificateServerUrl http:// <rmsserver>
```

This example enables IRM for the tenant and configures it to use the specified RMS server.


### --------------------EXAMPLE 2---------------------
```
C:\PS>site = Get-SPSite  HYPERLINK "http://myspserver" http:// <myspserver>

C:\PS>$subscription = $site.SiteSubscription

C:\PS>Set- SPSiteSubscriptionIRMConfig -Identity $subscription -IrmEnabled:$false
```

This example disables IRM for the tenant.


## PARAMETERS

### -Identity
Specifies a site subscription for a particular tenant.

```yaml
Type: SPSiteSubscriptionPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -IrmEnabled
Specifies whether IRM is enabled in the tenant.

The default value is false.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
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

### -CertificateServerUrl
Specifies the address of the RMS certificate server to use for the tenant.

```yaml
Type: Uri
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
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

### -PassThru
Specifies that the output object can be passed through the pipeline.

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

[Get-SPSiteSubscriptionIRMConfig]()
