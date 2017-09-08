---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Set-SPIRMSettings

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

### UNNAMED_PARAMETER_SET_1
```
Set-SPIRMSettings -CertificateServerUrl <Uri> [-IrmEnabled] [-AssignmentCollection <SPAssignmentCollection>]
 [-CertificatePassword <SecureString>] [-Confirm] [-ServiceAuthenticationCertificate <X509Certificate2>]
 [-SubscriptionScopeSettingsEnabled] [-WhatIf] [-UseOauth]
```

### UNNAMED_PARAMETER_SET_2
```
Set-SPIRMSettings [-IrmEnabled] [-AssignmentCollection <SPAssignmentCollection>]
 [-CertificatePassword <SecureString>] [-Confirm] [-ServiceAuthenticationCertificate <X509Certificate2>]
 [-SubscriptionScopeSettingsEnabled] [-UseActiveDirectoryDiscovery] [-WhatIf] [-UseOauth]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

Use the Set-SPIRMSettings cmdlet to set the Information Rights Management (IRM) settings for the tenant.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------EXAMPLE 1------------ (SharePoint Server 2013)
```
C:\PS>Set-SPIRMSettings -IrmEnabled -UseActiveDirectoryDiscovery
```

This example enables IRM for the farm and configures it to use the default RMS server configured in Active Directory.

### --------------EXAMPLE 1------------ (SharePoint Server 2016)
```
C:\PS>Set-SPIRMSettings -RmsEnabled -UseActiveDirectoryDiscovery
```

This example enables IRM for the farm and configures it to use the default RMS server configured in Active Directory.

### --------------EXAMPLE 2------------ (SharePoint Server 2013)
```
C:\PS>Set-SPIRMSettings -IrmEnabled -CertificateServerUrl http://myrmsserver
```

This example enables IRM for the farm and specifies the URL of the RMS server to use.

### --------------EXAMPLE 2------------ (SharePoint Server 2016)
```
C:\PS>Set-SPIRMSettings -RmsEnabled -CertificateServerUrl http://myrmsserver
```

This example enables IRM for the farm and specifies the URL of the RMS server to use.

### --------------EXAMPLE 3------------ (SharePoint Server 2013)
```
C:\PS>site = Get-SPSite http://myspserver

C:\PS>$subscription = $site.SiteSubscription

C:\PS>Set-SPIRMSettings -SiteSubscription $subscription -IrmEnabled -CertificateServerUrl http://myrmsserver
```

This example enables IRM for the specified tenant and specifies the URL of the RMS server to use.

### --------------EXAMPLE 3------------ (SharePoint Server 2016)
```
C:\PS>site = Get-SPSite http://myspserver

C:\PS>$subscription = $site.SiteSubscription

C:\PS>Set-SPIRMSettings -SiteSubscription $subscription -RmsEnabled -CertificateServerUrl http://myrmsserver
```

This example enables IRM for the specified tenant and specifies the URL of the RMS server to use.

### --------------EXAMPLE 4------------ (SharePoint Server 2013)
```
C:\PS>Set-SPIRMSettings -IrmEnabled:$false
```

This example disables IRM for the farm.

### --------------EXAMPLE 4------------ (SharePoint Server 2016)
```
C:\PS>Set-SPIRMSettings -RmsEnabled:$false
```

This example disables IRM for the farm.

## PARAMETERS

### -CertificateServerUrl
Specifies the address of the RMS certificate server to use for the tenant.

```yaml
Type: Uri
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IrmEnabled
Specifies whether or not IRM is enabled in the tenant.

The default value is false.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: True
Position: Named
Default value: False
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

### -CertificatePassword
Specifies the password to access the Service Authentication Certificate.
This password is required in order to install the certificate in the machine certificate store.

```yaml
Type: SecureString
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
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

### -ServiceAuthenticationCertificate
Specifies the service authentication certificate.

If the parameter is specified and not null, the authentication certificate is used when connecting from this farm to the RMS server.
If the parameter is not specified, the local farm connects to RMS server using integrated windows authentication.

```yaml
Type: X509Certificate2
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SubscriptionScopeSettingsEnabled
Specifies whether or not IRM can be configured at the site subscription scope.

Site subscriptions can only configure custom IRM settings if IRM is enabled at the Farm scope.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseActiveDirectoryDiscovery
Specifies whether or not the RMS service should be used for discovery that will determine the address of the RMS server in the domain.

```yaml
Type: SwitchParameter
Parameter Sets: UNNAMED_PARAMETER_SET_2
Aliases: 

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

### -UseOauth
{{Fill UseOauth Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

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

[Get-SPIRMSettings]()

