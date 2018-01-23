---
external help file: 
applicable: SharePoint Online
title: Connect-SPOService
schema: 2.0.0
---

# Connect-SPOService

## SYNOPSIS
Connects a SharePoint Online global administrator to a SharePoint Online connection (the SharePoint Online Administration Center).
This cmdlet must be run before any other SharePoint Online cmdlets can run.

## SYNTAX

### AuthenticationUrl
```
Connect-SPOService -AuthenticationUrl <String> [-ClientTag <String>] [-Credential <CredentialCmdletPipeBind>]
 -Url <UrlCmdletPipeBind> [<CommonParameters>]
```

### AuthenticationLocation
```
Connect-SPOService [-ClientTag <String>] [-Credential <CredentialCmdletPipeBind>]
 [-Region <AADCrossTenantAuthenticationLocation>] -Url <UrlCmdletPipeBind> [<CommonParameters>]
```

## DESCRIPTION
The Connect-SPOService cmdlet connects a SharePoint Online global administrator to the SharePoint Online Administration Center.

Only a single SharePoint Online service connection is maintained from any single Windows PowerShell session.
In other words, this is a per-organization administrator connection.
Running the Connect-SPOService cmdlet twice implicitly disconnects the previous connection.
The Windows PowerShell session will be set to serve the new SharePoint Online global administrator specified.

A delegated partner administrator has to swap connections for different organizations within the same Windows PowerShell session.

You must be a SharePoint Online global administrator to run the cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251832 (http://go.microsoft.com/fwlink/p/?LinkId=251832).

## EXAMPLES

###   ------------ Example 1 --------------------
```
{example code}
```
{example description}

## PARAMETERS

### -AuthenticationUrl
{{Fill AuthenticationUrl Description}}

```yaml
Type: String
Parameter Sets: AuthenticationUrl
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ClientTag
{{Fill ClientTag Description}}

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Credential
{{Fill Credential Description}}

```yaml
Type: CredentialCmdletPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Region
{{Fill Region Description}}

```yaml
Type: AADCrossTenantAuthenticationLocation
Parameter Sets: AuthenticationLocation
Aliases: 
Applicable: SharePoint Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Url
{{Fill Url Description}}

```yaml
Type: UrlCmdletPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Introduction to the SharePoint Online management shell]()

[Set up the SharePoint Online Management Shell Windows PowerShell environment]()

[Disconnect-SPOService](Disconnect-SPOService.md)

