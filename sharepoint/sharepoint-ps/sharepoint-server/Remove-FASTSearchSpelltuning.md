---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Remove-FASTSearchSpelltuning
---

# Remove-FASTSearchSpelltuning

## SYNOPSIS
Disables spell tuning.

## SYNTAX

```
Remove-FASTSearchSpelltuning [<CommonParameters>]
```

## DESCRIPTION
This cmdlet disables the alignment of the spell check dictionaries with indexed content.
This cmdlet stops the generation of new dictionaries, and the Did You Mean feature will only use content that was fed into the index before this cmdlet was run.

After disabling the dictionary-index alignment, use the                                             Reset-FASTSearchSpelltuning cmdlet to return to the out-of-the-box spelling dictionaries.
Did You Mean will then make suggestions based on standard spell checking dictionaries, not on indexed content.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

###   (FAST Server for SharePoint 2010)
```
PS C:\>Remove-FASTSearchSpelltuning
```

## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-FASTSearchSpelltuningStatus](Get-FASTSearchSpelltuningStatus.md)

[Reset-FASTSearchSpelltuning](Reset-FASTSearchSpelltuning.md)

[Add-FASTSearchSpelltuning](Add-FASTSearchSpelltuning.md)

