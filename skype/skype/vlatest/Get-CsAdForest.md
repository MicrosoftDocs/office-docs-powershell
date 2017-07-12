---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsAdForest

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Returns information indicating whether your Active Directory forest has been correctly configured to allow for the installation of Microsoft Lync Server 2010.

**Below Content Applies To:** Lync Server 2013

Returns information indicating whether your Active Directory forest has been correctly configured to allow for the installation of Lync Server.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Returns information indicating whether your Active Directory forest has been correctly configured to allow for the installation of Skype for Business Server 2015.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Get-CsAdForest [-GlobalCatalog <Fqdn>] [-GlobalSettingsDomainController <Fqdn>] [-RootDomainController <Fqdn>]
 [-Report <String>] [-SkipPrepareCheck <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Before you can install Lync Server 2010, you must make a number of forest-level changes to Active Directory Domain Services (AD DS).
This includes creating display specifiers and objects specific to Lync Server, creating the universal security groups that are needed to manage Lync Server, and granting global settings object access permissions to these groups.
The Get-CsAdForest cmdlet returns a single value that tells you whether or not Lync Server can be installed in a forest.
If Get-CsAdForest returns the value LC_FORESTSETTINGS_STATE_READY then you can install Lync Server in the forest.
If the cmdlet returns LC_FORESTSETTINGS_STATE_NOT_READY then you will need to correctly prepare the forest before trying to install Lync Server.

Get-CsAdForest runs as part of the Setup Wizard; if the Wizard determines that the domain is not correctly prepared, then you will receive an error message and Setup will stop.
However, you can also run Get-CsAdForest independently of the Setup Wizard in order to verify the forest status before you try to install Lync Server.

Get-Get-CsAdForest performs the same function as the following Microsoft Office Communications Server 2007 R2 command:

Lcscmd.exe /forest /action:CheckForestPrepState

Who can run this cmdlet: By default, anyone who has read permissions to Active Directory can run the Get-CsAdForest cmdlet locally.
Typically all domain members have this permission.

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Get-CsAdForest"}

**Below Content Applies To:** Lync Server 2013

Before you can install Lync Server, you must make a number of forest-level changes to Active Directory Domain Services (AD DS).
This includes creating display specifiers and objects specific to Lync Server, creating the universal security groups that are needed to manage Lync Server, and granting global settings object access permissions to these groups.
The Get-CsAdForest cmdlet returns a single value that tells you whether or not Lync Server can be installed in a forest.
If Get-CsAdForest returns the value LC_FORESTSETTINGS_STATE_READY then you can install Lync Server in the forest.
If the cmdlet returns LC_FORESTSETTINGS_STATE_NOT_READY then you will need to correctly prepare the forest before trying to install Lync Server.

Get-CsAdForest runs as part of the Setup Wizard; if the Wizard determines that the forest is not correctly prepared, then you will receive an error message and Setup will stop.
However, you can also run Get-CsAdForest independently of the Setup Wizard in order to verify the forest status before you try to install Lync Server.

Get-CsAdForest performs the same function as the following Microsoft Office Communications Server 2007 R2 command:

Lcscmd.exe /forest /action:CheckForestPrepState

Who can run this cmdlet: By default, anyone who has read permissions to Active Directory can run the Get-CsAdForest cmdlet locally.
Typically all domain members have this permission.

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsAdForest"}

**Below Content Applies To:** Skype for Business Server 2015

Before you can install Skype for Business Server 2015, you must make a number of forest-level changes to Active Directory Domain Services.
This includes creating display specifiers and objects specific to Skype for Business Server 2015, creating the universal security groups that are needed to manage Skype for Business Server 2015, and granting global settings object access permissions to these groups.
The Get-CsAdForest cmdlet returns a single value that tells you whether or not Skype for Business Server 2015 can be installed in a forest.
If the Get-CsAdForest cmdlet returns the value LC_FORESTSETTINGS_STATE_READY then you can install Skype for Business Server 2015 in the forest.
If the cmdlet returns LC_FORESTSETTINGS_STATE_NOT_READY then you will need to correctly prepare the forest before trying to install Skype for Business Server 2015.

The Get-CsAdForest cmdlet runs as part of the Setup Wizard; if the Wizard determines that the forest is not correctly prepared, then you will receive an error message and Setup will stop.
However, you can also run the Get-CsAdForest cmdlet independently of the Setup Wizard in order to verify the forest status before you try to install Skype for Business Server 2015.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Get-CsAdForest
```

The preceding example returns information indicating whether your Active Directory forest has been correctly configured to allow for the installation of Lync Server.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 returns information indicating whether your Active Directory forest has been correctly configured to allow for the installation of Lync Server.

Get-CsAdForest

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 returns information indicating whether your Active Directory forest has been correctly configured to allow for the installation of Skype for Business Server 2015.

Get-CsAdForest

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsAdForest -Report C:\Logs\ForestState.html
```

In Example 2, forest state information is returned and the forest readiness is displayed on the screen.
In addition, detailed information about the steps taken to determine the forest state is written to a file named C:\Logs\ForestState.html.
This file includes a detailed list of all the Active Directory groups and Active Directory containers where permissions were verified.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, forest state information is returned and the forest readiness is displayed on the screen.
In addition, detailed information about the steps taken to determine the forest state is written to a file named C:\Logs\ForestState.html.
This file includes a detailed list of all the Active Directory groups and Active Directory containers where permissions were verified.

Get-CsAdForest -Report C:\Logs\ForestState.html

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, forest state information is returned and the forest readiness is displayed on the screen.
In addition, detailed information about the steps taken to determine the forest state is written to a file named C:\Logs\ForestState.html.
This file includes a detailed list of all the Active Directory groups and Active Directory containers where permissions were verified.

Get-CsAdForest -Report C:\Logs\ForestState.html

## PARAMETERS

### -GlobalCatalog
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Fully qualified domain name (FQDN) of a global catalog server in your domain.
This parameter is not required if you are running Get-CsAdForest on a computer with an account in your domain.



**Below Content Applies To:** Skype for Business Server 2015

Fully qualified domain name (FQDN) of a global catalog server in your domain.
This parameter is not required if you are running the Get-CsAdForest cmdlet on a computer with an account in your domain.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GlobalSettingsDomainController
FQDN of a domain controller where global settings are stored.
If global settings are stored in the System container in AD DS, then this parameter must point to the root domain controller.
If global settings are stored in the Configuration container, then any domain controller can be used and this parameter can be omitted.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RootDomainController
FQDN of the root domain controller, used to create trust paths for clients that need to access resources in domains other than their own.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Report
Enables you to specify a file path for the log file created when the cmdlet runs.
For example: -Report "C:\Logs\ForestPrep.html"

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipPrepareCheck
**Below Content Applies To:** Lync Server 2010

{{Fill SkipPrepareCheck Description}}



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

When set to True ($True), causes Get-CsAdForest to run without first doing its initial preparation checks.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.

## OUTPUTS

###  
Get-CsAdForest returns instances of the Microsoft.Rtc.Management.Deployment.LcForestSettingsState object.

###  
The Get-CsAdForest cmdlet returns instances of the Microsoft.Rtc.Management.Deployment.LcForestSettingsState object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/f063df2f-fdb2-4599-bfb0-fb4ba3584e3b(OCS.14).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/f063df2f-fdb2-4599-bfb0-fb4ba3584e3b(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/f063df2f-fdb2-4599-bfb0-fb4ba3584e3b(OCS.16).aspx)

