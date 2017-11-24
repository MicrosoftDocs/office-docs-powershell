---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Set-SPAppAutoProvisionConnection
schema: 2.0.0
---

# Set-SPAppAutoProvisionConnection

## SYNOPSIS
Sets provision connection settings for an app.


## SYNTAX

### WebHostEndPoint
```
Set-SPAppAutoProvisionConnection -ConnectionType <ConnectionTypes> -EndPoint <String>
 [-AssignmentCollection <SPAssignmentCollection>] [-SiteSubscription <SPSiteSubscriptionPipeBind>]
 [<CommonParameters>]
```

### WebHostSetup
```
Set-SPAppAutoProvisionConnection -ConnectionType <ConnectionTypes> -EndPoint <String> -Password <String>
 -Username <String> [-AssignmentCollection <SPAssignmentCollection>]
 [-SiteSubscription <SPSiteSubscriptionPipeBind>] [<CommonParameters>]
```

### WebHostCredential
```
Set-SPAppAutoProvisionConnection -ConnectionType <ConnectionTypes> -Password <String> -Username <String>
 [-AssignmentCollection <SPAssignmentCollection>] [-SiteSubscription <SPSiteSubscriptionPipeBind>]
 [<CommonParameters>]
```

### Remove
```
Set-SPAppAutoProvisionConnection [-Remove] [-AssignmentCollection <SPAssignmentCollection>]
 [-SiteSubscription <SPSiteSubscriptionPipeBind>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

Use the `Set-SPAppAutoProvisionConnection` cmdlet to set provision connection settings for a specified app.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).


## EXAMPLES

### --------------------EXAMPLE 1---------------------
```
C:\PS>Set-SpAppAutoProvisionConnection -ConnectionType RemoteWebHost -EndPoint https://SPremotewebhost -Password passname -Username <username>
```

This example configures remote web host to be used provision apps that use this functionality for the default site subscription server on http://SPremotewebhost.


### --------------------EXAMPLE 2---------------------
```
C:\PS>$subscription = Get-SPSiteSubscription http://Contoso.com

C:\PS>Set-SPAppAutoProvisionConnection -ConnectionType RemoteWebHost -EndPoint https://SPremotewebhost -Password passname -Username <username> -SiteSubscription $subscription
```

This example configures remote web host to be used provision apps that use this functionality for the site subscription of Contoso.com site to server on http://SPremotewebhost.


### --------------------EXAMPLE 3---------------------
```
C:\PS>Set-SPAppAutoProvisionConnection -ConnectionType RemoteWebHost -EndPoint https://SPremotewebhost
```

This example updates the endpoint of the already configured remote web host server https://SPRemotewebhost for the default site subscription.


### --------------------EXAMPLE 4---------------------
```
C:\PS>Set-SPAppAutoProvisionConnection -ConnectionType RemoteWebHost -Remove
```

This example removes the remote web host configuration for the default site subscription.


## PARAMETERS

### -ConnectionType
Specifies the connection type to provision.

```yaml
Type: ConnectionTypes
Parameter Sets: WebHostEndPoint, WebHostSetup, WebHostCredential
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndPoint
Specifies the end point of the provision connection.

```yaml
Type: String
Parameter Sets: WebHostEndPoint, WebHostSetup
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Password
Specifies the password for the provision connection.

```yaml
Type: String
Parameter Sets: WebHostSetup, WebHostCredential
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Remove
Removes the auto provision connection of the app.

```yaml
Type: SwitchParameter
Parameter Sets: Remove
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Username
Specifies the user name of the connection.

```yaml
Type: String
Parameter Sets: WebHostSetup, WebHostCredential
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

### -SiteSubscription
Specifies the site collection for which the provision connection is to be associated.

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

[Get-SPAppAutoProvisionConnection]()
