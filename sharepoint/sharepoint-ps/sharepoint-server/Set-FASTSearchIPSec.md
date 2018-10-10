---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Set-FASTSearchIPSec
---

# Set-FASTSearchIPSec

## SYNOPSIS
Configures local Internet Protocol security (IPsec) for Microsoft FAST Search Server 2010 for SharePoint.

## SYNTAX

### Create
```
Set-FASTSearchIPSec [-Create] -Password <SecureString> -UserName <String> [-LogFile <String>]
 [<CommonParameters>]
```

### Remove
```
Set-FASTSearchIPSec [-Remove] [-LogFile <String>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet deletes or creates firewall rules to configure IP security for the local machine.

FAST Search Server 2010 for SharePoint must be installed on the local machine before you run this cmdlet.

If you are not running this cmdlet on the admin node in the FAST Search Server 2010 for SharePoint installation, make sure that the admin node is started before you run this cmdlet.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
PS C:\>Set-FASTSearchIPSec -Create -UserName user1 -Password xxx
```

This example sets up Internet Protocol security on the local machine.

### ---------------EXAMPLE 2----------------- (FAST Server for SharePoint 2010)
```
PS C:\>Set-FASTSearchIPSec -Remove
```

This example removes Internet Protocol security rules from the local machine.

## PARAMETERS

### -Create
Specifies that IPsec rules will be created.

```yaml
Type: SwitchParameter
Parameter Sets: Create
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Password
Specifies the password of the domain user that can look up machines in the domain controller.

```yaml
Type: SecureString
Parameter Sets: Create
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Remove
Specifies that IPsec rules will be deleted.

```yaml
Type: SwitchParameter
Parameter Sets: Remove
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserName
Specifies the username of the domain user that can look up machines in the domain controller.

```yaml
Type: String
Parameter Sets: Create
Aliases: User
Applicable: FAST Server for SharePoint 2010

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogFile
Specifies the full path of a file where all log messages will be written.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

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

