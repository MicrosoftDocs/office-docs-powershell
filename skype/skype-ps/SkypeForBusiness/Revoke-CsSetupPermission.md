---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skype/revoke-cssetuppermission
schema: 2.0.0
title: Revoke-CsSetupPermission
---

# Revoke-CsSetupPermission

## SYNOPSIS
Revokes the Skype for Business Server setup rights that have been granted on an Active Directory organizational unit (OU).
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Revoke-CsSetupPermission -ComputerOU <String> [-Domain <Fqdn>] [-DomainController <Fqdn>]
 [-GlobalCatalog <Fqdn>] [-Force] [-Report <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The domain preparation that takes place when you install Skype for Business Server does not automatically add the rights that enable members of the RTCUniversalServerAdmins group to run the `Enable-CsTopology` cmdlet.
That means that, by default, you must be a domain administrator in order to enable a topology.
To give members of the RTCUniversalServerAdmins group the right to enable a topology, you must run the `Grant-CsSetupPermissions` cmdlet.
In addition, you will need to run this cmdlet against each Active Directory container that hosts computers running Skype for Business Server.

Rights granted by using the `Grant-CsSetupPermission` cmdlet can later be removed by using the `Revoke-CsSetupPermission` cmdlet.
If you run that cmdlet, the RTCUniversalServerAdmins group will no longer have Skype for Business Server setup rights for the specified Active Directory container.
In that case, you will need to be an enterprise administrator or a domain administrator in order to enable a Skype for Business Server topology.


## EXAMPLES

### Example 1
```
Revoke-CsSetupPermission -ComputerOU "ou=CsServers,dc=litwareinc,dc=com"
```

The command shown in Example 1 revokes the setup rights applied to the CsServers OU in the domain litwareinc.com.


## PARAMETERS

### -ComputerOU

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Distinguished name (DN) of the OU that contains the accounts for the computers where Skype for Business Server will be (or has been) installed.
For example:

`-ComputerOU "ou=CsServers,dc=litwareinc,dc=com"`

If you prefer you can leave off the domain portion of the distinguished name when specifying the OU.
For example:

`-ComputerOU "ou=CsServers"`


```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Domain

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Name of the domain where the OU is located.
If this parameter is not included, then the `Revoke-CsSetupPermission` cmdlet will look for the OU in the current domain.


```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Fully qualified name of the domain controller to be contacted when assigning the policy.
For example:

`-DomainController atl-dc-001.litwareinc.com`

If not specified, the `Revoke-CsSetupPermission` cmdlet will contact the nearest available domain controller when assigning the policy.


```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GlobalCatalog

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Fully qualified name of the global catalog server to be contacted when assigning the policy.
For example:

`-GlobalCatalog atl-dc-001.litwareinc.com`

If not specified, the `Revoke-CsSetupPermission` cmdlet will contact the nearest available global catalog server when assigning the policy.


```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Report

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Enables you to specify a file path for the log file created when the cmdlet runs.
For example:

`-Report "C:\Logs\OUPermissions.html"`


```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None
The `Revoke-CsSetupPermission` cmdlet does not accept pipelined input.

## OUTPUTS

### None

## NOTES

## RELATED LINKS

[Grant-CsSetupPermission](Grant-CsSetupPermission.md)

[Test-CsSetupPermission](Test-CsSetupPermission.md)
